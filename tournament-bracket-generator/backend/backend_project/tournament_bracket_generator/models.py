from django.db import models

# Create your models here.

class Tournament(models.Model):
  name = models.CharField(max_length=30, verbose_name='name')
  date = models.DateField(verbose_name='date')
  location = models.CharField(max_length=30, verbose_name="location")
  number_of_players = models.IntegerField(verbose_name='number of players')
  type = models.CharField(max_length=30, verbose_name="type")
  
class Player(models.Model):
  first_name = models.CharField(max_length=30, verbose_name="first name")
  last_name = models.CharField(max_length=30, verbose_name="last name")
  nick_name = models.CharField(max_length=30, unique=True, verbose_name="nickname")
  email = models.EmailField(unique=True, verbose_name="email")

class Fixture(models.Model):
  LEVELS = [
    ('G', 'group'),
    ('QF', 'quarter-final'),
    ('SF', 'semi-final'),
    ('3P', '3rd place'),
    ('F', 'final'),
  ]

  player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='fixture_player', verbose_name='player_name')
  opponent = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='fixture_opponent', verbose_name='opponent_name')
  player_goals_1st_leg = models.IntegerField(verbose_name='player goals 1st leg')
  opponent_goals_1st_leg = models.IntegerField(verbose_name='opponent goals 1st leg')
  stage = models.CharField(max_length=2, choices=LEVELS, verbose_name='stage')
  
# class GroupStage(models.Model):
#   group_name = models.CharField(max_length = 1, verbose_name='group name')
#   position = models.IntegerField(verbose_name='position')
#   player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='group_player', verbose_name='player')
#   matches_played = models.IntegerField(verbose_name='matches played')
#   wins = models.IntegerField(verbose_name='wins')
#   draws = models.IntegerField(verbose_name='draws')
#   loses = models.IntegerField(verbose_name='loses')
#   goals_for = models.IntegerField(verbose_name='goals for')
#   goals_against = models.IntegerField(verbose_name='goals against')
#   goals_difference = models.IntegerField(verbose_name='goals difference')
#   points = models.IntegerField(verbose_name='points')
#   qualified = models.BooleanField(verbose_name='qualified')

# class KnockoutStage(models.Model):
#   LEVELS = [
#     ('QF', 'quarter-final'),
#     ('SF', 'semi-final'),
#     ('3P', '3rd place'),
#     ('F', 'final'),
#   ]

#   player_name = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='knockout_player', verbose_name='player_name')
#   opponent_name = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='knockout_opponent', verbose_name='opponent_name')
#   player_goals_1st_leg = models.IntegerField(verbose_name='player goals 1st leg')
#   opponent_goals_1st_leg = models.IntegerField(verbose_name='opponent goals 1st leg')
#   player_goals_2nd_leg = models.IntegerField(null=True, blank=True, verbose_name='player goals 2nd leg')
#   opponent_goals_2nd_leg = models.IntegerField(null=True, blank=True, verbose_name='opponent goals 2nd leg')
#   stage = models.CharField(max_length=2, choices=LEVELS, verbose_name='stage')

class Feedback(models.Model):
  rate = models.IntegerField(verbose_name='rate')
  comment = models.TextField(max_length=500, verbose_name='comment')