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
    # Nested read-only lists: languages and interests linked to this About instance
    languages = LanguageSerializer(many=True, read_only=True)
    interests = InterestSerializer(many=True, read_only=True)

    class Meta:
        model = About
        # About is a singleton, and its languages/interests are managed
        # via their own endpoints (no write nested fields needed here)
        fields = ("id", "description", "location", "available", "resume_url", "languages", "interests")