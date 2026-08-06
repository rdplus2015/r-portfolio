
from rest_framework import serializers

from projects.models import Project, Skill



class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "category", "order"]



class ProjectSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    skill_ids = serializers.PrimaryKeyRelatedField(
        queryset=Skill.objects.all(),
        many=True,
        write_only=True,
        source="skills"
    )

    class Meta:
        model = Project
        fields = [
            "id", "title", "slug",
            "description", "long_description",
            "backend_image", "frontend_image", "deployment_image",
            "github_url", "live_url", "linkedin_url",
            "tags",
            "skills", "skill_ids",
            "featured", "order",
            "created_at", "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]