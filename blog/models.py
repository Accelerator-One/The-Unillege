from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
class blog(models.Model):
    
    blog_categories = (
        ('creative work', 'creative work'),
        ('professional', 'professional')
    )
    
    author_name = models.CharField(max_length=255)
    category = models.CharField(choices = blog_categories, max_length=255)
    title = models.CharField(max_length=255)
    content = RichTextField()
    image = models.ImageField(upload_to='blogs/%Y/%m/%d/')
    created_date = models.DateTimeField(auto_now_add=True)
    is_featured = models.BooleanField(default=False)
    
    def __str__(self):
        return "Blog by " + self.author_name
    