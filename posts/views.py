from django.shortcuts import render
from .models import Post, Comment, Vote, Alumni, VoteAlumni, Events, Notes
from .serializers import PostSerializer, CommentSerializer, VoteSerializer, AlumniSerializer, VoteAlumniSerializer, EventsSerializer, NotesSerializer
from django.http import JsonResponse
from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

class PostView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = PostSerializer
    # queryset = Post.objects.all()
    def get_queryset(self):
        return Post.objects.all() 
    
    
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    
class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
    
class AlumniView(viewsets.ModelViewSet):
    serializer_class = AlumniSerializer
    queryset = Alumni.objects.all()  

class VoteAlumniView(viewsets.ModelViewSet):
    serializer_class = VoteAlumniSerializer
    queryset = VoteAlumni.objects.all()
    
class EventsView(viewsets.ModelViewSet):
    serializer_class = EventsSerializer
    queryset = Events.objects.all()
    
class NotesView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = NotesSerializer
    queryset = Notes.objects.all()


    

