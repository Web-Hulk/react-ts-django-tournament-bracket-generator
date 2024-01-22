from rest_framework import serializers
from .models import Player, Tournament, Fixture, GroupStage, Feedback, RegistrationStatus

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

class GroupStageSerializer(serializers.ModelSerializer):
  player = serializers.StringRelatedField()

  class Meta:
    model = GroupStage
    fields = ('player', 'group_name', 'position', 'matches_played', 'wins', 'draws', 'loses', 'goals_for', 'goals_against', 'goals_difference', 'points', 'qualified')

class CreateFeedbackSerializer(serializers.ModelSerializer):
  class Meta:
    model = Feedback
    fields = ('rate', 'comment')

class RegistrationStatusSerializer(serializers.ModelSerializer):
  class Meta:
    model = RegistrationStatus
    fields = '__all__'