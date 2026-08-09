from rest_framework import routers

from career.views import EducationViewSet, ExperienceViewSet

router = routers.DefaultRouter()
router.register("education", EducationViewSet, basename="education")
router.register("experience", ExperienceViewSet, basename="experience")

urlpatterns = router.urls

