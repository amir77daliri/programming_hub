from django.db import models
from Users.models import User


class Contest(models.Model):
    STATUS_CHOICES = [
        ('active', 'فعال'),
        ('inactive', 'غیر فعال'),
        ('finished', 'پایان یافته')
    ]
    name = models.CharField(max_length=255)
    duration = models.IntegerField()
    start_date = models.DateTimeField()
    participants = models.ManyToManyField(User, 'user_contests', blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='inactive')

    class Meta:
        verbose_name = 'مسابقه'
        verbose_name_plural = 'مسابقات'

    def __str__(self):
        return self.name
