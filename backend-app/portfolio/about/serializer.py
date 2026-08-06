from rest_framework import serializers

from about.models import Language, Interest


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('name', 'level', 'order')


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('label', 'order')