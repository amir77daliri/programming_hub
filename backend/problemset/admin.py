from django.contrib import admin
from .models import (
    ProgrammingLanguages,
    Tags,
    Categories,
    Questions,
    Answers
)


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


admin.site.register(ProgrammingLanguages, LanguageAdmin)
admin.site.register(Tags, TagsAdmin)
admin.site.register(Categories, CategoriesAdmin)
