from django.shortcuts import render
from .models import Testimonial
from blog.models import blog
# Create your views here.
def home_page(request):
    testimonials = Testimonial.objects.order_by('-created_date').filter(is_featured=True)
    featured_blogs = blog.objects.order_by('-created_date').filter(is_featured=True)
    data = {
        'testimonials' : testimonials,
        'featured_blogs': featured_blogs,
    }
    return render(request, 'webpages/index.html', data)

def contact(request):
    return render(request, 'webpages/contact.html')