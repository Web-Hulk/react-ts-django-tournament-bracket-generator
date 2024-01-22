# Generated by Django 5.0.1 on 2024-01-21 19:50

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament_bracket_generator', '0009_alter_registrationstatus_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registrationstatus',
            name='status',
            field=models.BooleanField(verbose_name='status'),
        ),
        migrations.CreateModel(
            name='KnockoutStage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_goals_1st_leg', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)], verbose_name='player goals 1st leg')),
                ('opponent_goals_1st_leg', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)], verbose_name='opponent goals 1st leg')),
                ('player_goals_2nd_leg', models.IntegerField(blank=True, default=0, null=True, validators=[django.core.validators.MinValueValidator(0)], verbose_name='player goals 2nd leg')),
                ('opponent_goals_2nd_leg', models.IntegerField(blank=True, default=0, null=True, validators=[django.core.validators.MinValueValidator(0)], verbose_name='opponent goals 2nd leg')),
                ('stage', models.CharField(choices=[('QF', 'Quarter-final'), ('SF', 'Semi-final'), ('3P', '3rd place'), ('F', 'Final')], max_length=2, verbose_name='stage')),
                ('opponent_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='knockout_opponent', to='tournament_bracket_generator.player', verbose_name='opponent_name')),
                ('player_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='knockout_player', to='tournament_bracket_generator.player', verbose_name='player_name')),
            ],
        ),
    ]
