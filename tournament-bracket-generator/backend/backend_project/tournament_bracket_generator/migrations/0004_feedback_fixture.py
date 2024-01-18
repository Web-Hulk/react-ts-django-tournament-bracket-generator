# Generated by Django 5.0.1 on 2024-01-17 19:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament_bracket_generator', '0003_tournament'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.IntegerField(verbose_name='rate')),
                ('comment', models.TextField(max_length=500, verbose_name='comment')),
            ],
        ),
        migrations.CreateModel(
            name='Fixture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_goals_1st_leg', models.IntegerField(verbose_name='player goals 1st leg')),
                ('opponent_goals_1st_leg', models.IntegerField(verbose_name='opponent goals 1st leg')),
                ('stage', models.CharField(choices=[('G', 'group'), ('QF', 'quarter-final'), ('SF', 'semi-final'), ('3P', '3rd place'), ('F', 'final')], max_length=2, verbose_name='stage')),
                ('opponent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fixture_opponent', to='tournament_bracket_generator.player', verbose_name='opponent_name')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fixture_player', to='tournament_bracket_generator.player', verbose_name='player_name')),
            ],
        ),
    ]