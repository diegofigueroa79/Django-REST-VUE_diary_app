from django.shortcuts import render, redirect, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Entry
from .serializers import EntrySerializer

# Create your views here.
@api_view(['GET', 'POST'])
def index(request):

    if request.is_ajax():
        if request.method == 'GET':
            entries = Entry.objects.all()
            serialized = EntrySerializer(entries, many=True)
            return Response(serialized.data)
    
    return render(request, 'diary/index.html')

@api_view(['GET'])
def edit_entry(request, entryId):
    entry = get_object_or_404(Entry, pk=entryId)
    serialized = EntrySerializer(entry)
    return Response(serialized.data)