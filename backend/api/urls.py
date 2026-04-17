from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, GameViewSet, NewsletterViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'games', GameViewSet)
router.register(r'newsletter', NewsletterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
