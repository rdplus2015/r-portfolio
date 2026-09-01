from django.db import models

# About model
class About(models.Model):
    description = models.TextField()
    location = models.CharField(max_length=100)
    available = models.BooleanField(default=True)
    resume_url = models.URLField(blank=True, null=True)

    def save(self, *args, **kwargs):
        # Force the primary key to always be 1, no matter how many times
        # save() is called. This guarantees that only one row can ever
        # exist for this model, effectively making it a singleton table.
        self.pk = 1
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        # Prevent deletion of the singleton instance, intentionally does nothing.
        pass

    @classmethod
    def load(cls):
        """
        Classmethod: called on the class itself (About.load()), not on an
        existing instance. Useful here because we don't need an object to
        already exist to call it.

        get_or_create(pk=1) looks for a row where id=1:
        - if it exists, it returns that row
        - if it doesn't exist yet, it creates it automatically

        It always returns a tuple: (object, created_boolean).
        We only need the object here, so `created` is unused.

        This avoids a crash (DoesNotExist error) the first time About
        is queried before any row has been created yet.
        """
        obj, created = cls.objects.get_or_create(pk=1)
        return obj

    def __str__(self):
        return "About Me"

# Language model
class Language(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE, related_name="languages")
    name = models.CharField(max_length=50)
    level = models.CharField(max_length=50)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.name} — {self.level}"


# Interest model
class Interest(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE, related_name="interests")
    label = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.label