from django.urls import path
from .views import PlayerView, CreatePlayerView, CreateTournamentView, FixtureView, GroupStageView, CreateFeedbackView, RegistrationStatusView

urlpatterns = [
  path('players/', PlayerView.as_view()),
  path('create-player/', CreatePlayerView.as_view()),
  path('create-tournament/', CreateTournamentView.as_view()),
  path('fixtures/', FixtureView.as_view()),
  path('group-stages/', GroupStageView.as_view()),
  path('feedback/', CreateFeedbackView.as_view()),
  path('registration-status/', RegistrationStatusView.as_view()),
]