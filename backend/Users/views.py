from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import SignupSerializer, LoginSerializer
from .models import User
from rest_framework.authtoken.models import Token


@api_view(["POST"])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    if User.objects.filter(email=serializer.validated_data['email']).exists():
        return Response({'error': "کاربری با این ایمیل از قبل موجود است!"}, status=status.HTTP_400_BAD_REQUEST)
    user = User(email=serializer.validated_data['email'], password=serializer.validated_data['password'], username=serializer.validated_data['username'])
    user.save()
    token = Token.objects.create(user=user)
    response = {
        'token': str(token),
        'msg': 'ثبت نام شما با موفقیت انجام شد.'
    }
    return Response(response, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def login(request):
    print('data ', request.data)
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data.get('user', None)
    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        response = {
            'msg': 'success',
            'id': user.id,
            'email': user.email,
            'name': user.get_full_name(),
            'role': 'admin' if user.is_staff else 'user',
            'token': str(token)
        }
        return Response(response, status=status.HTTP_200_OK)

    return Response({'msg': 'ایمیل یا رمز عبور اشتباه است !'}, status=status.HTTP_400_BAD_REQUEST)
