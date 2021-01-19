from django.urls import path
from .views import QuizView, QuestionView, CreateScoreView, UserScores

urlpatterns = [
    path('quiz', QuizView.as_view(), name='quiz' ),
    path('question', QuestionView.as_view(), name='questions'),
    path('createscore', CreateScoreView.as_view(), name='scorecreate'),
    path('viewscore', UserScores.as_view(), name='scores'),
]
