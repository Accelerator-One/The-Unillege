from django.db import models

# Create your models here.
class Testimonial(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    testimonial = models.TextField(blank=True)
    email = models.EmailField(max_length=254)
    image = models.ImageField(upload_to="testimonials/%Y/%m/%d/")
    created_date = models.DateTimeField(auto_now_add=True)
    is_featured = models.BooleanField(default=False)
    
    def __str__(self):
        toDisplay = "Testimonial by " + self.first_name + " " + self.last_name
        return toDisplay
    