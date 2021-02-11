from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.events_page, name="events_page"),
]