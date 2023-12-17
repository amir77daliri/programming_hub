from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password as password_validation
from django.contrib.auth import authenticate


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=True, write_only=True)
    re_password = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 're_password')

    def validate_password(self, value):
        password_validation(value)
        return value

    def validate(self, attrs):
        if attrs['password'] != attrs['re_password']:
            raise serializers.ValidationError("پسوردها مطابقت ندارند.")
        return attrs


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, attrs):
        email = attrs['email']
        password = attrs['password']
        user = User.objects.filter(email=email, password=password).first()
        if user is not None:
            attrs['user'] = user
            return attrs
        else:
            raise serializers.ValidationError('ایمیل یا رمز عبور اشتباه است.')
