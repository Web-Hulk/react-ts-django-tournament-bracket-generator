# Generated by Django 5.0.1 on 2024-01-28 13:48

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament_bracket_generator', '0012_fixture_group_alter_player_registration_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='fixture',
            name='status',
            field=models.CharField(choices=[('NS', 'Not Started'), ('IP', 'In Progress'), ('CO', 'Completed')], default='NS', max_length=2, verbose_name='status'),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='group',
            field=models.CharField(choices=[('A', 'Group A'), ('B', 'Group B'), ('C', 'Group C'), ('D', 'Group D')], editable=False, max_length=1, null=True, verbose_name='group name'),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='opponent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fixture_opponent', to='tournament_bracket_generator.player', verbose_name='opponent name'),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='opponent_goals_1st_leg',
            field=models.IntegerField(blank=True, default=None, null=True, validators=[django.core.validators.MinValueValidator(0)], verbose_name='opponent goals 1st leg'),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='player',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fixture_player', to='tournament_bracket_generator.player', verbose_name='player name'),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='player_goals_1st_leg',
            field=models.IntegerField(blank=True, default=None, null=True, validators=[django.core.validators.MinValueValidator(0)], verbose_name='player goals 1st leg'),
        ),
    ]