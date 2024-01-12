from rest_framework import serializers
from .models import Player, Tournament

class PlayerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Player
    # fields = '__all__'
    fields = ('id', 'first_name', 'last_name', 'nick_name', 'email')

class CreatePlayerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Player
    fields = ('first_name', 'last_name', 'nick_name', 'email')

class CreateTournamentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tournament
    fields = ('name', 'date', 'location', 'number_of_players', 'type')