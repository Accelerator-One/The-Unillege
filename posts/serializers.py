from .models import Post, Comment, Vote, Alumni, VoteAlumni, Events
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
            'created_on',
            'author_id',
            'image'
        )
        model = Post
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = [
            'id',
            'post',
            'comment',
            'author'
        ]
        model = Comment
        
class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        fields = [
            'id',
            'post',
            'user'
        ]
        model = Vote
class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        fields: ('author', 'company', 'story', 'image')
        model = Alumni
        
class VoteAlumniSerializer(serializers.ModelSerializer):
    class Meta:
        fields: ('post', 'user')
        model = VoteAlumni
        
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        fields: ('title', 'event_details')
        model = Events