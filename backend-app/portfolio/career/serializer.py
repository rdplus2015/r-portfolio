from rest_framework import serializers

from career.models import Education, Experience
from projects.Serializer import SkillSerializer
from projects.models import Skill


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        # Education merges the old "Certification" fields too (issued_date,
        # in_progress, badge_image, credential_url), so one serializer covers both cases
        fields = [
            "id", "title", "organization",
            "location", "description",
            "start_date", "end_date",
            "issued_date", "in_progress",
            "badge_image", "credential_url", "order"
        ]


class ExperienceSerializer(serializers.ModelSerializer):
    # Nested read-only representation of related skills used in this experience
    technologies = SkillSerializer(many=True, read_only=True)

    # Write-only field to assign technologies by ID when creating/updating
    technology_ids = serializers.PrimaryKeyRelatedField(
        queryset=Skill.objects.all(),
        many=True,
        write_only=True,
        source="technologies"  # maps this input field to the "technologies" model field
    )

    class Meta:
        model = Experience
        fields = [
            "id", "title", "company",
            "location", "type",
            "start_date", "end_date",
            "description", "company_logo",
            "technologies", "technology_ids",  # read/write pair for the M2M relation
            "order"
        ]