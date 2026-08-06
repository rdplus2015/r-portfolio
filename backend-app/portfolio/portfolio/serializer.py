from rest_framework import serializers

from portfolio.models import SiteConfig


class SiteConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteConfig
        fields = ["id", "email_primary", "phone", "email_secondary",
                  "description", "github_url", "linkedin_url"]