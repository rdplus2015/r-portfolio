from rest_framework import serializers

from career.models import Education


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = [
            "id", "title", "organization",
            "location", "description",
            "start_date", "end_date",
            "issued_date", "in_progress",
            "badge_image", "credential_url", "order"
        ]