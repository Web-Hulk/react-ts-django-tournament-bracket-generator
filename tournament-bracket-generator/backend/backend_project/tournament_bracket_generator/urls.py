from django.urls import path
from .views import PlayerView, CreatePlayerView, CreateTournamentView, FixtureView, CreateFeedbackView

urlpatterns = [
  path('players/', PlayerView.as_view()),
  path('create-player/', CreatePlayerView.as_view()),
  path('create-tournament/', CreateTournamentView.as_view()),
  path('fixtures/', FixtureView.as_view()),
  path('feedback/', CreateFeedbackView.as_view()),
]