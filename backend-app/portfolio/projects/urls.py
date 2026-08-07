from rest_framework.routers import DefaultRouter

from projects.views import SkillViewSet

router = DefaultRouter()
router.register("skills", SkillViewSet, basename="skill")

urlpatterns = router.urls