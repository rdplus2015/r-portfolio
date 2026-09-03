from rest_framework import serializers

from portfolio.models import SiteConfig


class SiteConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteConfig
        # SiteConfig is a singleton (only one row, enforced in the model),
        # so this serializer just exposes all its fields directly
        fields = ["id", "site_name", "site_description", "site_url",  "email_primary", "email_secondary", "phone",
                  "github_url", "linkedin_url"]