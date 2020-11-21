from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    author_name = models.ForeignKey(User,to_field='username', on_delete=models.CASCADE, null = True)
    image = models.ImageField(upload_to='images/', default='images/default.jpg')
    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.CharField(max_length=140)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    def __str__(self):
        return self.comment
    
class Vote(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    
class Alumni(models.Model):
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    company = models.CharField(max_length=50)
    story = models.TextField(default="this is how i got placed!")
    image = models.ImageField(upload_to='images/', default='images/default2.jpg')
    
class VoteAlumni(models.Model):
    post = models.ForeignKey(Alumni, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    
class Events(models.Model):
    title = models.CharField(max_length=100)
    event_details = models.TextField()
    
class Test(models.Model):
    author_name = models.ForeignKey(User,to_field='username', on_delete=models.CASCADE, null = True)
    
class Notes(models.Model):
    title = models.CharField(max_length=50)
    pdf  = models.FileField(upload_to='pdf')
    
    