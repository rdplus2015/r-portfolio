from rest_framework import serializers

from projects.models import Project, Skill


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "category", "order"]


class ProjectSerializer(serializers.ModelSerializer):
    # Nested read-only representation of related skills (full skill data)
    skills = SkillSerializer(many=True, read_only=True)

    # Write-only field to assign skills by their IDs when creating/updating a project
    skill_ids = serializers.PrimaryKeyRelatedField(
        queryset=Skill.objects.all(),
        many=True,
        write_only=True,
        source="skills"  # maps this input field to the "skills" model field
    )

    class Meta:
        model = Project
        fields = [
            "id", "title", "slug",
            "description", "long_description",
            "backend_image", "frontend_image", "deployment_image",
            "github_url", "live_url", "linkedin_url",
            "tags",
            "skills", "skill_ids",  # read/write pair for the M2M relation
            "featured", "order",
            "created_at", "updated_at",
        ]
        # These fields are auto-managed by Django, not set by the client
        read_only_fields = ["created_at", "updated_at"]