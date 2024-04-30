from django.urls import path
from .views import QuestionsListApi, TagsListApi, QuestionDetailApi

urlpatterns = [
    path('list/', QuestionsListApi.as_view()),
    path('tags/', TagsListApi.as_view()),
    path('<int:pk>/', QuestionDetailApi.as_view())
]
