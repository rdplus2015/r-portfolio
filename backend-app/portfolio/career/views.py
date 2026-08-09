from django.shortcuts import render
from rest_framework import viewsets

from career.models import Education
from career.serializer import EducationSerializer


# Create your views here.


class Education (viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
