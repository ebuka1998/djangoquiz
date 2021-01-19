from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from quiz.serializers import ScoreSerializer

Userr = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    
    class Meta(UserCreateSerializer.Meta):
        fields = '__all__'
        model = Userr
        
        


class UserSerializer(serializers.ModelSerializer):
    score = ScoreSerializer(many=True)
    class Meta:
        fields = ('id', 'email', 'name', 'is_staff', 'date_joined', 'score')
        model = User