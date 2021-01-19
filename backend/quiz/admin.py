from django.contrib import admin

from . import models



@admin.register(models.Quiz)

class QuizAdmin(admin.ModelAdmin):
	list_display = [ 'id', 'subject',]

class AnswerInlineModel(admin.TabularInline):
    model = models.Answer
    fields = [ 'answer', 'isRight']

@admin.register(models.Question)

class QuestionAdmin(admin.ModelAdmin):
    fields = [ 'question', 'quiz', 'difficulty' ]
    list_display = [ 'question', 'quiz' ]
    inlines = [ AnswerInlineModel, ] 

@admin.register(models.Answer)

class AnswerAdmin(admin.ModelAdmin):
    list_display = [ 'answer', 'isRight', 'question' ]
    
@admin.register(models.Score)

class ScoreAdmin(admin.ModelAdmin):
    list_display = [ 'user', 'subject', 'score', 'passed' ]
