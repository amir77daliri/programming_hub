from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Contest(models.Model):
    STATUS_CHOICES = [
        ('active', 'فعال'),
        ('inactive', 'غیر فعال'),
        ('finished', 'پایان یافته')
    ]
    name = models.CharField(max_length=255)
    q_count = models.IntegerField(default=3)
    duration = models.IntegerField()
    start_date = models.DateTimeField()
    participants = models.ManyToManyField(User, 'user_contests', blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='inactive')

    class Meta:
        verbose_name = 'مسابقه'
        verbose_name_plural = 'مسابقات'

    def __str__(self):
        return self.name
