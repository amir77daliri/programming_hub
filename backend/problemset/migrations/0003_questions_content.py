# Generated by Django 4.2.8 on 2024-02-22 09:07

from django.db import migrations
import mdeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('problemset', '0002_remove_questions_content_questions_is_public_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='content',
            field=mdeditor.fields.MDTextField(null=True),
        ),
    ]
