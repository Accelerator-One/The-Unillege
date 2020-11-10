from .models import Post, Comment, Vote
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = [
            'id',
            'title',
            'content',
            'created_on',
            'author_id'
        ]
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