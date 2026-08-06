from rest_framework import serializers

from career.models import Education, Experience
from projects.Serializer import SkillSerializer
from projects.models import Skill


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


class ExperienceSerializer(serializers.ModelSerializer):
    technologies = SkillSerializer(many=True, read_only=True)
    technology_ids = serializers.PrimaryKeyRelatedField(
        queryset=Skill.objects.all(),
        many=True,
        write_only=True,
        source="technologies"
    )

    class Meta:
        model = Experience
        fields = [
            "id", "title", "company",
            "location", "type",
            "start_date", "end_date",
            "description", "company_logo",
            "technologies", "technology_ids",
            "order"
        ]
