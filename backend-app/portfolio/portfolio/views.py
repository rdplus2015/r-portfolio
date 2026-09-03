from rest_framework import viewsets

from portfolio.models import SiteConfig
from portfolio.serializer import SiteConfigSerializer


class SiteConfigViewSet(viewsets.ModelViewSet):
    queryset = SiteConfig.objects.all()
    serializer_class = SiteConfigSerializer

    def get_object(self):
        # Same singleton pattern as AboutViewSet - always return the
        # single SiteConfig instance regardless of the URL's pk.
        return SiteConfig.load()