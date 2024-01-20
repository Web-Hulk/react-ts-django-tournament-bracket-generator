from django.contrib import admin
from .models import Player, Tournament, Feedback, Fixture, GroupStage

# Register your models here.
admin.site.register(Player)
admin.site.register(Tournament)
admin.site.register(Feedback)
admin.site.register(Fixture)
admin.site.register(GroupStage)