from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('contact', views.contact),
    path('blog', views.blog, name = 'blog'),
    path('blog_detail', views.blog_detail, name='blog_detail'),
    path('project_detail', views.project_detail, name='project_detail')
]