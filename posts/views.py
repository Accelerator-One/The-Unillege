from django.shortcuts import render
from .models import Post, Comment, Vote, Alumni, VoteAlumni, Events
from .serializers import PostSerializer, CommentSerializer, VoteSerializer, AlumniSerializer, VoteAlumniSerializer, EventsSerializer
from django.http import JsonResponse
from rest_framework import viewsets, permissions

class PostView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = PostSerializer
    # queryset = Post.objects.all()
    def get_queryset(self):
        return Post.objects.all()
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    
class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
    
class AlumniView(viewsets.ModelViewSet):
    serializer_class = AlumniSerializer
    querryset = Alumni.objects.all()  

class VoteAlumniView(viewsets.ModelViewSet):
    serializer_class = VoteAlumniSerializer
    querryset = VoteAlumni.objects.all()
    
class EventsView(viewsets.ModelViewSet):
    serializer_class = EventsSerializer
    querryset = Events.objects.all()


    

