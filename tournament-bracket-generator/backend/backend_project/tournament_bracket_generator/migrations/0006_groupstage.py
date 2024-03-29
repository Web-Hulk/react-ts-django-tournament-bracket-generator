# Generated by Django 5.0.1 on 2024-01-19 12:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament_bracket_generator', '0005_alter_feedback_rate'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupStage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group_name', models.CharField(max_length=1, verbose_name='group name')),
                ('position', models.IntegerField(verbose_name='position')),
                ('matches_played', models.IntegerField(verbose_name='matches played')),
                ('wins', models.IntegerField(verbose_name='wins')),
                ('draws', models.IntegerField(verbose_name='draws')),
                ('loses', models.IntegerField(verbose_name='loses')),
                ('goals_for', models.IntegerField(verbose_name='goals for')),
                ('goals_against', models.IntegerField(verbose_name='goals against')),
                ('goals_difference', models.IntegerField(verbose_name='goals difference')),
                ('points', models.IntegerField(verbose_name='points')),
                ('qualified', models.BooleanField(verbose_name='qualified')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_player', to='tournament_bracket_generator.player', verbose_name='player')),
            ],
        ),
    ]
