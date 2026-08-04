from django.db import models

# Create your models here.

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