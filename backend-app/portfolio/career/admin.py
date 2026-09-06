# career/admin.py
from django.contrib import admin
from career.models import Education, Experience

admin.site.register(Education)
admin.site.register(Experience)