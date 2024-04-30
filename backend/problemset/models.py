from django.db import models
# from ckeditor_uploader.fields import RichTextUploadingField
from markdownx.models import MarkdownxField
from competitions.models import Contest
from django.contrib.auth import get_user_model
import os
import uuid

User = get_user_model()


def custom_upload_to(instance, filename):
    _, extensions = os.path.splitext(filename)
    new_filename = f'{uuid.uuid4()}{extensions}'
    if isinstance(instance, Questions):
        return f'uploads/initial_projects/{new_filename}'
    elif isinstance(instance, Answers):
        return f'uploads/answers/{new_filename}'


class ProgrammingLanguages(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'زبان برنامه نویسی'
        verbose_name_plural = 'زبان های برنامه نویسی'


class Tags(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'برچسب'
        verbose_name_plural = 'برچسب ها'


class Categories(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'دسته بندی'
        verbose_name_plural = 'دسته بندی ها'


class Questions(models.Model):
    LEVEL_CHOICES = [
        ('ساده', 'ساده'),
        ('متوسط', 'متوسط'),
        ('سخت', 'سخت')
    ]
    title = models.CharField(max_length=266)
    content = MarkdownxField(null=True)
    level = models.CharField(max_length=8, choices=LEVEL_CHOICES)
    score = models.PositiveIntegerField(default=100)
    initial_project = models.FileField(upload_to=custom_upload_to, blank=True, null=True)
    count_of_solved = models.IntegerField(default=0)
    is_public = models.BooleanField(default=False, blank=True)
    # Relations :
    contest = models.ForeignKey(Contest, related_name='questions', on_delete=models.SET_NULL, blank=True, null=True, default=None)
    tags = models.ManyToManyField(Tags, related_name='tag_questions', blank=True)
    category = models.ForeignKey(Categories, related_name='category_questions', on_delete=models.SET_NULL, null=True, blank=True)
    code_ln = models.ManyToManyField(ProgrammingLanguages, related_name='language_questions')
    # dates :
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'سوال'
        verbose_name_plural = 'سوالات'
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Answers(models.Model):
    code = models.FileField(upload_to=custom_upload_to)
    score = models.IntegerField(default=0)
    is_checked = models.BooleanField(default=False)
    # relations :
    code_ln = models.ForeignKey(ProgrammingLanguages, related_name='language_answers', on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, related_name='user_answers', on_delete=models.CASCADE)
    question = models.ForeignKey(Questions, related_name='answers', on_delete=models.CASCADE)

    # dates :
    submission_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'ارسال'
        verbose_name_plural = 'تمامی ارسال ها'


class TestCases(models.Model):
    question = models.ForeignKey(Questions, related_name='test_cases', on_delete=models.CASCADE)
    input = models.CharField(max_length=255)
    output = models.CharField(max_length=255)
