from . import views
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()

router.register('posts', views.PostView, 'post')
router.register('comments', views.CommentView)
router.register('votes', views.VoteView)

urlpatterns = [
    path('', include(router.urls))
]