from rest_framework import viewsets

from about.models import About
from about.serializer import AboutSerializer


# Create your views here.

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

    def get_object(self):
        # Override the default lookup behavior. Normally, DRF uses the
        # pk/id from the URL (e.g. /about/1/) to find which object to
        # return. Since About is a singleton (only one row ever exists,
        # forced to pk=1), we ignore the URL entirely and always return
        # the same unique instance via About.load(), creating it if it
        # doesn't exist yet.
        return About.load()