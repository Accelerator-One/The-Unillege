from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'webpages/index.html')

def contact(request):
    return render(request, 'webpages/contact.html')

def blog(request):
    return render(request, 'webpages/blog.html')

def blog_detail(request):
    return render(request, 'webpages/blog-detail.html')

def project_detail(request):
    return render(request, 'webpages/project-detail.html')
