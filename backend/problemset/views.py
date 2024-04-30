from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from .models import Questions, Tags
from competitions.models import Contest
from .serializers import QuestionSerializer, TagsSerializer
from competitions.serializers import ContestSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def root_page(request):
    questions = Questions.objects.filter(is_public=True)[:3]
    contests = Contest.objects.all()[:3]
    questions_serialized = QuestionSerializer(questions, many=True).data
    contests_serialized = ContestSerializer(contests, many=True).data
    response = {
        'questions': questions_serialized,
        'contests': contests_serialized
    }
    return Response(response, status=status.HTTP_200_OK)


class QuestionListPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 20


class QuestionsListApi(ListAPIView):
    serializer_class = QuestionSerializer
    pagination_class = QuestionListPagination

    def get_queryset(self):
        queryset = Questions.objects.filter(is_public=True)
        params = dict(self.request.GET)
        query = params['searchTerm'][0]
        level = params['level'][0]
        category = params['category'][0]
        tags_ids = [int(tag) for tag in params['selectedTags[]']if tag != 'All']
        contests_ids = [int(c_id) for c_id in params['selectedContests[]'] if c_id != 'All']

        if not level == 'All':
            queryset = queryset.filter(level=level)
        if len(tags_ids) > 0:
            queryset = queryset.filter(tags__in=tags_ids).distinct()
        if len(contests_ids) > 0:
            queryset = queryset.filter(contest__in=contests_ids).distinct()
        if not query == 'All':
            queryset = queryset.filter(Q(title__contains=query) | Q(tags__name__contains=query)).distinct()
        if not category == 'All':
            queryset = queryset.filter(category__name=category)
        return queryset


class TagsListApi(ListAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer


class QuestionDetailApi(RetrieveAPIView):
    queryset = Questions.objects.filter(is_public=True)
    serializer_class = QuestionSerializer
