from django.db import models
from user.models import User

# Create your models here.

class Quiz(models.Model):
    subject = models.CharField(max_length=255, blank=False, null=False)
    date_created = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Quiz'
        verbose_name_plural = 'Quizzes'
        ordering = ['id']

    def __str__(self):
        return self.subject


class Question(models.Model):
    
    QUESTION_DIFFICULTY = [
        ('HARD', 'Hard'),
        ('EASY', 'Easy'),
        ('INTERMEDIATE', 'Intermediate'),
    ]
    
    quiz = models.ForeignKey(Quiz, related_name='question', on_delete=models.CASCADE)
    question = models.TextField()
    difficulty = models.CharField(max_length=50, choices=QUESTION_DIFFICULTY, default='EASY')
    date_created = models.DateTimeField(auto_now_add=True)
    data_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'
        ordering = ['id']
    
    def __str__(self):
        return self.question
    
    
    
class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answer', on_delete=models.CASCADE)
    answer = models.CharField(max_length=255, blank=False, null=True)
    isRight = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    data_updated = models.DateTimeField(auto_now=True)
       
    def __str__(self):
        return self.answer
    
class Score(models.Model):
    user = models.ForeignKey(User, related_name='score', on_delete=models.CASCADE)
    subject = models.CharField(max_length=255, blank=False, null=False)
    score = models.IntegerField(blank=False, null=False)
    passed = models.BooleanField(default=True)
    isPublished = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.user.name} - {self.subject}'
    
    def save(self, *args, **kwargs):
        self.score = self.score * 2
        if(self.score < 10):
            self.passed = False
        super().save(*args, **kwargs)