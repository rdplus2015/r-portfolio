from django.db import models

# Create your models here.

from django.db import models


class Education(models.Model):
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    location = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    issued_date = models.DateField(null=True, blank=True)
    in_progress = models.BooleanField(default=False)

    # Link to verify/validate the credential (e.g. AWS certification
    # verification page). This is NOT an image, just a URL.
    credential_url = models.URLField(blank=True)

    # Official badge image for the certification (e.g. the AWS badge PNG).
    # Different from credential_url: this is the visual badge itself.
    badge_image = models.URLField(blank=True)

    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title


class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=100, blank=True)

    # Free text field (e.g. "Internship", "Contract", "Full-time").
    # ------------------------------------------------------------------
    # PROBLEMATIC ALTERNATIVE (not used here): using choices= would force
    # a fixed dropdown list (TextChoices), preventing typos but requiring
    # every possible value to be anticipated upfront. Kept as free text
    # for now since there are only 2 entries and only one person (you)
    # filling this in. Can be migrated to choices= later if needed.
    # ------------------------------------------------------------------
    type = models.CharField(max_length=50, blank=True)

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True)

    # Optional company logo, free/optional field, no strict requirement.
    company_logo = models.URLField(blank=True)

    # ------------------------------------------------------------------
    # Many-to-many link to Skill, which lives in the "projects" app.
    #
    # PROBLEMATIC ALTERNATIVE (not used here): importing Skill directly
    # at the top of this file, e.g.:
    #     from projects.models import Skill
    #     technologies = models.ManyToManyField(Skill, ...)
    # This works fine UNTIL "projects" ever needs to import something
    # from "career" in return -> that creates a circular import (A needs
    # B, B needs A, neither file can finish loading first) and crashes.
    #
    # SOLUTION USED HERE: reference the model by string "app_label.ModelName".
    # Django resolves this lazily (only when actually needed, not at
    # file-load time), which avoids circular imports entirely and also
    # means the "projects" app doesn't even need to exist yet when this
    # app's migrations are first created.
    # ------------------------------------------------------------------
    technologies = models.ManyToManyField("projects.Skill", related_name="experiences", blank=True)

    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.title} @ {self.company}"