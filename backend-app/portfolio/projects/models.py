from django.db import models


class Skill(models.Model):
    class Category(models.TextChoices):
        FRONTEND = "frontend", "Frontend"
        BACKEND = "backend", "Backend"
        DATABASE = "database", "Database"
        DEVOPS = "devops", "DevOps"
        CLOUD = "cloud", "Cloud"
        MOBILE = "mobile", "Mobile"
        AI = "ai", "AI"
        GAME_DEV = "game_dev", "Game Development"
        LANGUAGE = "language", "Language"
        TOOL = "tool", "Tool"
        OTHER = "other", "Other"

    name = models.CharField(max_length=50)
    category = models.CharField(max_length=20, choices=Category.choices)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    long_description = models.TextField(blank=True)

    # Three separate images instead of a single generic one, matching
    # the actual React data (backend/frontend/deployment screenshots).
    backend_image = models.URLField(blank=True)
    frontend_image = models.URLField(blank=True)
    deployment_image = models.URLField(blank=True)

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)

    # Simple free text instead of a separate Tag table/model, to avoid
    # unnecessary complexity for now (color styling handled in React).
    tags = models.CharField(max_length=100, blank=True)

    skills = models.ManyToManyField(Skill, related_name="projects", blank=True)

    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title