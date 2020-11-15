from django.shortcuts import render
from .models import Post, Comment, Vote
from .serializers import PostSerializer, CommentSerializer, VoteSerializer
from django.http import JsonResponse
from rest_framework import viewsets

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    
class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()


    

