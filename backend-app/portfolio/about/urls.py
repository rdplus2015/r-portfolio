from rest_framework.routers import DefaultRouter

from about.views import AboutViewSet

router = DefaultRouter()
router.register("about", AboutViewSet, basename="about")

urlpatterns = router.urls

