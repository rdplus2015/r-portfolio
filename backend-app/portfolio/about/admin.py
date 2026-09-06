# about/admin.py
from django.contrib import admin
from about.models import About, Language, Interest

admin.site.register(About)
admin.site.register(Language)
admin.site.register(Interest)