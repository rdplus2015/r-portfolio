from rest_framework.routers import DefaultRouter

from projects.views import SkillViewSet, ProjectViewSet

router = DefaultRouter()
router.register("skills", SkillViewSet, basename="skill")
router.register("projects", ProjectViewSet, basename="project")
urlpatterns = router.urls


