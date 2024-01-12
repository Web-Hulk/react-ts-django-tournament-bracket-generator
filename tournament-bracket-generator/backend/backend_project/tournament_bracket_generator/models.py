from django.db import models

# Create your models here.
class Player(models.Model):
  first_name = models.CharField(max_length=30, verbose_name="first name")
  last_name = models.CharField(max_length=30, verbose_name="last name")
  nick_name = models.CharField(max_length=30, unique=True, verbose_name="nickname")
  email = models.EmailField(unique=True, verbose_name="email")

class Tournament(models.Model):
  name = models.CharField(max_length=30, verbose_name='name')
  date = models.DateField(verbose_name='date')
  location = models.CharField(max_length=30, verbose_name="location")
  number_of_players = models.IntegerField(verbose_name='number of players')
  type = models.CharField(max_length=30, verbose_name="type")