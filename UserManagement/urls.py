from .views import RegistrationAPI, LoginAPI, UserAPI 
from posts.views import PostView
from django.conf.urls import url
from rest_framework import routers
from django.urls import include

router = routers.DefaultRouter()
router.register('posts', PostView, 'posts')

urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view())
]
