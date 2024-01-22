from django.contrib import admin
from .models import Player, Tournament, Feedback, Fixture, GroupStage, KnockoutStage, RegistrationStatus

class PlayerAdmin(admin.ModelAdmin):
  list_display = ('first_name', 'last_name', 'nick_name', 'email')

class TournamentAdmin(admin.ModelAdmin):
  list_display = ('name', 'date', 'location', 'number_of_players', 'type')

class FeedbackAdmin(admin.ModelAdmin):
  list_display = ('rate', 'comment')

class FixtureAdmin(admin.ModelAdmin):
  list_display = ('player', 'opponent', 'player_goals_1st_leg', 'opponent_goals_1st_leg', 'stage')

class GroupStageAdmin(admin.ModelAdmin):
  list_display = ('player', 'group_name', 'position', 'matches_played', 'wins', 'draws', 'loses', 'goals_for', 'goals_against', 'goals_difference', 'points', 'qualified')

class KnockoutStageAdmin(admin.ModelAdmin):
  list_display = ('player_name', 'opponent_name', 'player_goals_1st_leg', 'opponent_goals_1st_leg', 'player_goals_2nd_leg', 'opponent_goals_2nd_leg', 'stage')

class RegistrationStatusAdmin(admin.ModelAdmin):
  MAX_COUNT = 1
  
  def has_add_permission(self, request):
    if self.model.objects.count() >= self.MAX_COUNT:
      return False
    return super().has_add_permission(request)


# Register your models here.
admin.site.register(Player, PlayerAdmin)
admin.site.register(Tournament, TournamentAdmin)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(Fixture, FixtureAdmin)
admin.site.register(GroupStage, GroupStageAdmin)
admin.site.register(KnockoutStage, KnockoutStageAdmin)
admin.site.register(RegistrationStatus, RegistrationStatusAdmin)