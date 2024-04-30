from django.db import models
from django.contrib import admin
from markdownx.widgets import AdminMarkdownxWidget
from .models import (
    ProgrammingLanguages,
    Tags,
    Categories,
    Questions,
    Answers
)


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ('title_persian', 'level_persian', 'score_persian', 'count_of_solved_persian')

    formfield_overrides = {
        models.TextField: {'widget': AdminMarkdownxWidget},
    }

    def title_persian(self, obj):
        return f'{obj.title}'
    title_persian.short_description = 'عنوان'

    def level_persian(self, obj):
        return f'{obj.level}'
    level_persian.short_description = 'سطح'

    def score_persian(self, obj):
        return f'{obj.score}'
    score_persian.short_description = 'امتیاز'

    def count_of_solved_persian(self, obj):
        return f'{obj.count_of_solved}'
    count_of_solved_persian.short_description = 'تعداد حل'


class LanguageAdmin(admin.ModelAdmin):
    list_display = ('name_persian', )

    def name_persian(self, obj):
        return f'{obj.name}'
    name_persian.short_description = 'نام '


class TagsAdmin(admin.ModelAdmin):
    list_display = ('name_persian', )

    def name_persian(self, obj):
        return f'{obj.name}'
    name_persian.short_description = 'نام '


class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name_persian', )

    def name_persian(self, obj):
        return f'{obj.name}'
    name_persian.short_description = 'نام '


class AnswersAdmin(admin.ModelAdmin):
    list_display = ('score_persian', 'is_checked_persian', 'question_title', 'user_email', 'submission_date')

    def score_persian(self, obj):
        return f'{obj.score}'
    score_persian.short_description = 'امتیاز '

    def is_checked_persian(self, obj):
        if obj.is_checked:
            return 'داوری شده'
        return 'بررسی نشده'
    is_checked_persian.short_description = 'وضعیت'

    def question_title(self, obj):
        return f'{obj.question.title}'
    question_title.short_description = 'سوال'

    def user_email(self, obj):
        return f'{obj.user.email}'
    user_email.short_description = 'ارسال کننده'

    def submission_date_persian(self, obj):
        return f'{obj.submission_date}'
    submission_date_persian.short_description = 'تاریخ ثبت'


admin.site.register(Answers, AnswersAdmin)
admin.site.register(Questions, QuestionsAdmin)
admin.site.register(ProgrammingLanguages, LanguageAdmin)
admin.site.register(Tags, TagsAdmin)
admin.site.register(Categories, CategoriesAdmin)
