from django.contrib import admin
from .models import Contest
from utils.date_converter import jalali_converter


class ContestAdmin(admin.ModelAdmin):
    list_display = ('name_persian', 'start_date_persian', 'duration_persian', 'status_persian')

    def duration_persian(self, obj):
        return f'{obj.duration} دقیقه'
    duration_persian.short_description = 'مدت مسابقه'

    def start_date_persian(self, obj):
        return jalali_converter(obj.start_date)
    start_date_persian.short_description = 'زمان شروع'

    def name_persian(self, obj):
        return f'{obj.name}'
    name_persian.short_description = 'نام مسابقه'

    def status_persian(self, obj):
        if obj.status == 'inactive':
            return 'غیرفعال'
        elif obj.status == 'active':
            return 'در حال برگزاری'
        return 'پایان یافته'
    status_persian.short_description = 'وضعیت'


admin.site.register(Contest, ContestAdmin)
