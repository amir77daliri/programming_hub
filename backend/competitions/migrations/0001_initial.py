# Generated by Django 4.2.8 on 2023-12-23 14:41

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Contest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('duration', models.DurationField()),
                ('start_date', models.DateTimeField()),
                ('participants', models.ManyToManyField(blank=True, related_name='user_contests', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'مسابقه',
                'verbose_name_plural': 'مسابقات',
            },
        ),
    ]
