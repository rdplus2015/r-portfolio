from rest_framework import serializers

from about.models import Language, Interest, About


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ("id", "name", "level", "order")


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ("id", "label", "order")


class AboutSerializer(serializers.ModelSerializer):
    languages = LanguageSerializer(many=True, read_only=True)
    interests = InterestSerializer(many=True, read_only=True)

    class Meta:
        model = About
        fields = ("id", "description", "location", "available", "resume_url", "languages", "interests")


