from django.urls import path
from .views import ContestListApi

urlpatterns = [
    path('list/', ContestListApi.as_view())
]

