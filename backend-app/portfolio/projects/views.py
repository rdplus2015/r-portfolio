from django.shortcuts import render

# Create your views here.


from rest_framework import viewsets

from projects.Serializer import SkillSerializer
from projects.models import Skill


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer