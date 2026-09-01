from rest_framework import viewsets

from career.models import Education, Experience
from career.serializer import EducationSerializer, ExperienceSerializer


# Create your views here.


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
