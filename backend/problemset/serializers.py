from rest_framework import serializers
from competitions.serializers import ContestSerializer
from .models import Questions, Tags, Categories, ProgrammingLanguages
from utils.date_converter import jalali_converter


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class LanguagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguages
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    contest = ContestSerializer()
    tags = TagsSerializer(many=True)
    category = CategoriesSerializer()
    code_ln = LanguagesSerializer(many=True)
    created_at = serializers.SerializerMethodField('convert_date')

    def convert_date(self, obj):
        return jalali_converter(obj.created_at)

    class Meta:
        model = Questions
        fields = '__all__'
