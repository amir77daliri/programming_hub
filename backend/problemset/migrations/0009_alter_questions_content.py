# Generated by Django 4.2.8 on 2024-02-25 19:16

from django.db import migrations
import markdownx.models


class Migration(migrations.Migration):

    dependencies = [
        ('problemset', '0008_alter_questions_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='content',
            field=markdownx.models.MarkdownxField(null=True),
        ),
    ]
