from django.shortcuts import render
from .models import Post, Comment, Vote
from .serializers import PostSerializer, CommentSerializer, VoteSerializer
from django.http import JsonResponse
from rest_framework import viewsets, permissions

class PostView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = PostSerializer
    def get_queryset(self):
        return self.request.user.posts.all()
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    
class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()


    

