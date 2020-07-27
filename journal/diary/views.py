from django.shortcuts import render, redirect, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Entry
from .serializers import EntrySerializer

# Create your views here.
@api_view(['GET'])
def index(request):
    entries = Entry.objects.all()
    context = {
        'entries': entries,
    }
    return render(request, 'diary/index.html', context)

@api_view(['GET'])
def add_entry(request):

    return render(request, 'diary/entry.html')

@api_view(['GET'])
def edit_entry(request, entryId):
    entry = get_object_or_404(Entry, pk=entryId)
    serialized = EntrySerializer(entry)
    return Response(serialized.data)