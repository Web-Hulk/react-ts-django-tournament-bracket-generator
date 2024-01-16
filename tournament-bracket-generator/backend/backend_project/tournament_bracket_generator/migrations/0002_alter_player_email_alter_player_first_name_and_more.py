# Generated by Django 5.0.1 on 2024-01-05 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament_bracket_generator', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='email'),
        ),
        migrations.AlterField(
            model_name='player',
            name='first_name',
            field=models.CharField(max_length=30, verbose_name='first name'),
        ),
        migrations.AlterField(
            model_name='player',
            name='last_name',
            field=models.CharField(max_length=30, verbose_name='last name'),
        ),
        migrations.AlterField(
            model_name='player',
            name='nick_name',
            field=models.CharField(max_length=30, unique=True, verbose_name='nickname'),
        ),
    ]