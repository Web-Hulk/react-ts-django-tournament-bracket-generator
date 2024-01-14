from django.urls import path
# from . import views
from .views import PlayerView, CreatePlayerView, CreateTournamentView

urlpatterns = [
  path('players/', PlayerView.as_view()),
  path('create-player/', CreatePlayerView.as_view()),
  path('create-tournament/', CreateTournamentView.as_view()),
]