from rest_framework import viewsets, permissions
from .models import News, Game, Newsletter
from .serializers import NewsSerializer, GameSerializer, NewsletterSerializer

class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all().order_by('-published_at')
    serializer_class = NewsSerializer

class GameViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Game.objects.all().order_by('-release_date')
    serializer_class = GameSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer
    permission_classes = [permissions.AllowAny] # Allow anyone to sign up
