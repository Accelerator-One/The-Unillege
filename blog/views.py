from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import blog
# Create your views here.
def blog_page(request):
    blogs = blog.objects.all()
    data = {
        'blogs': blogs,
    }
    return render(request, 'webpages/blog.html', data)

def blog_detail(request, id):
    Blog = get_object_or_404(blog, pk=id)
    data = {
        'blog': Blog,
    }
    return render(request, 'webpages/blog_detail.html', data)