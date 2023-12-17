from rest_framework import serializers
from .models import User


class UserSignup(serializers.ModelSerializer):
    password = serializers.CharField(required=True, write_only=True)
    re_password = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 're_password')

    def validate(self, attrs):
        if attrs['password'] != attrs['re_password']:
            raise serializers.ValidationError("پسوردها مطابقت ندارند.")
        return attrs
