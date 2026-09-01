from django.shortcuts import render

# Create your views here.


from rest_framework import viewsets

from projects.Serializer import SkillSerializer, ProjectSerializer
from projects.models import Skill, Project


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer