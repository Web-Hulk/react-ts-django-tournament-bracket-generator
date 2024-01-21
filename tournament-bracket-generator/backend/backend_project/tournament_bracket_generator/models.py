from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Tournament(models.Model):
  name = models.CharField(max_length=30, verbose_name='name')
  date = models.DateField(verbose_name='date')
  location = models.CharField(max_length=30, verbose_name="location")
  number_of_players = models.IntegerField(validators=[MinValueValidator(1)], verbose_name='number of players')
  type = models.CharField(max_length=30, verbose_name="type")

  def __str__(self):
    return f"{self.name}"
  
class Player(models.Model):
  first_name = models.CharField(max_length=30, verbose_name="first name")
  last_name = models.CharField(max_length=30, verbose_name="last name")
  nick_name = models.CharField(max_length=30, unique=True, verbose_name="nickname")
  email = models.EmailField(unique=True, verbose_name="email")

  def __str__(self):
    # return f"ID: {self.id} - {self.first_name} {self.last_name}"
    return f"{self.first_name} {self.last_name}"

class Fixture(models.Model):
  LEVELS = [
    ('G', 'Group'),
    ('QF', 'Quarter-final'),
    ('SF', 'Semi-final'),
    ('3P', '3rd place'),
    ('F', 'Final'),
  ]

  player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='fixture_player', verbose_name='player_name')
  opponent = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='fixture_opponent', verbose_name='opponent_name')
  player_goals_1st_leg = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='player goals 1st leg')
  opponent_goals_1st_leg = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='opponent goals 1st leg')
  stage = models.CharField(max_length=2, choices=LEVELS, verbose_name='stage')

  def __str__(self):
    return f"{self.stage}: {self.player.first_name} {self.player.last_name} {self.player_goals_1st_leg}-{self.opponent_goals_1st_leg} {self.opponent.first_name} {self.opponent.last_name}"
  
# Add default values
class GroupStage(models.Model):
  GROUP_NAMES = [
    ('A', 'Group A'),
    ('B', 'Group B'),
    ('C', 'Group C'),
    ('D', 'Group D'),
  ]

  player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='group_player', verbose_name='player')
  group_name = models.CharField(max_length=1, choices=GROUP_NAMES, verbose_name='group name')
  position = models.IntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(4)], verbose_name='position')
  matches_played = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(3)], verbose_name='matches played')
  wins = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(3)], verbose_name='wins')
  draws = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(3)], verbose_name='draws')
  loses = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(3)], verbose_name='loses')
  goals_for = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='goals for')
  goals_against = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='goals against')
  goals_difference = models.IntegerField(default=0, verbose_name='goals difference')
  points = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(9)], verbose_name='points')
  qualified = models.BooleanField(verbose_name='qualified')

  def __str__(self):
    return f"Group {self.group_name}: {self.player.first_name} {self.player.last_name}"

# class KnockoutStage(models.Model):
#   LEVELS = [
#     ('QF', 'Quarter-final'),
#     ('SF', 'Semi-final'),
#     ('3P', '3rd place'),
#     ('F', 'Final'),
#   ]

#   player_name = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='knockout_player', verbose_name='player_name')
#   opponent_name = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='knockout_opponent', verbose_name='opponent_name')
#   player_goals_1st_leg = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='player goals 1st leg')
#   opponent_goals_1st_leg = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='opponent goals 1st leg')
#   player_goals_2nd_leg = models.IntegerField(default=0, validators=[MinValueValidator(0)], null=True, blank=True, verbose_name='player goals 2nd leg')
#   opponent_goals_2nd_leg = models.IntegerField(default=0, validators=[MinValueValidator(0)], null=True, blank=True, verbose_name='opponent goals 2nd leg')
#   stage = models.CharField(max_length=2, choices=LEVELS, verbose_name='stage')

#   def __str__(self):
#     return f"{self.stage}: {self.player_name.first_name} {self.player_name.last_name} vs {self.opponent_name.first_name} {self.opponent_name.last_name}"

class Feedback(models.Model):
  rate = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)], verbose_name='rate')
  comment = models.TextField(max_length=500, verbose_name='comment')

  def __str__(self):
    return f"Rate: {self.rate}"
  
class RegistrationStatus(models.Model):
  status = models.BooleanField(verbose_name='status')

  class Meta:
    verbose_name_plural = 'Registration Status'

  def __str__(self):
    return f"Registration Opened: {self.status}"