from rest_framework import serializers
from .models import Player, Tournament, Fixture, Feedback, RegistrationStatus

class PlayerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Player
    fields = ('id', 'first_name', 'last_name', 'nick_name', 'email')

class CreatePlayerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Player
    fields = ('first_name', 'last_name', 'nick_name', 'email')

class CreateTournamentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tournament
    fields = ('name', 'date', 'location', 'number_of_players', 'type')

class FixtureSerializer(serializers.ModelSerializer):
  class Meta:
    model = Fixture
    fields = ('player', 'opponent', 'player_goals_1st_leg', 'opponent_goals_1st_leg', 'stage')

class CreateFeedbackSerializer(serializers.ModelSerializer):
  class Meta:
    model = Feedback
    fields = ('rate', 'comment')

class RegistrationStatusSerializer(serializers.ModelSerializer):
  class Meta:
    model = RegistrationStatus
    fields = '__all__'