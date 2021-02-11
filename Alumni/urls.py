from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.alumni_page, name = 'alumni_page')
]