from .models import Contest
from rest_framework.generics import ListAPIView
from .serializers import ContestSerializer


class ContestListApi(ListAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer




