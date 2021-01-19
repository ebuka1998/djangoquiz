from rest_framework import generics
from .serializers import QuizSerializer, QuestionSerializer, Answer, ScoreSerializer
from .models import Quiz, Question, Answer, Score
from rest_framework.permissions import AllowAny


class QuizView(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [AllowAny]
    

class QuestionView(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self, *args, **kwargs):
        params = self.request.query_params['subject']
        questions = self.queryset.filter(quiz__subject = params)
        
        return questions 

class CreateScoreView(generics.CreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    permission_classes = [AllowAny] 
     

class UserScores(generics.ListAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self, *args, **kwargs):
        user = self.request.user.id
        score = self.queryset.filter(user = user)
        return score
        
        