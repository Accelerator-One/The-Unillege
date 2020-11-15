from .views import RegistrationAPI, LoginAPI, UserAPI 
from posts.views import PostView
from django.conf.urls import url

urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view())
]
