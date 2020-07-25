from django.shortcuts import render, get_object_or_404

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
            # let's serialize our entries
            serializer = EntrySerializer(entries, many=True)
            # our serializer object has the data attribute which
            # is the serialized data from our db
            return Response(serializer.data)
    
    return render(request, 'diary/index.html')

@api_view(['GET', 'POST'])
def add_entry(request):

    return render(request, 'diary/entry.html')