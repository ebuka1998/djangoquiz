from rest_framework import serializers

from .models import Quiz, Question, Answer, Score 
from user.serializers import UserSerializer




class QuizSerializer(serializers.ModelSerializer):
    
    class Meta:
        fields = ['id', 'subject']
        model = Quiz
        


class Answer(serializers.ModelSerializer):    
    class Meta:
        fields = ['id', 'question', 'answer', 'isRight']
        model = Answer


class QuestionSerializer(serializers.ModelSerializer): 
    quiz = QuizSerializer(read_only=True)
    answer = Answer(many=True)
    
    class Meta:
        fields = ['id', 'quiz', 'question', 'answer', 'date_created']
        model = Question

class ScoreSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only = True)
    class Meta:
        fields = '__all__'
        model = Score

    