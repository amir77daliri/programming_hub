# Generated by Django 4.2.8 on 2023-12-23 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problemset', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='tag_questions', to='problemset.tags'),
        ),
    ]
