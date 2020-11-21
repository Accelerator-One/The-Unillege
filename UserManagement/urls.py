from .views import RegistrationAPI, LoginAPI, UserAPI 
from posts.views import PostView, VoteView, CommentView, AlumniView, VoteAlumniView, EventsView, NotesView
from django.conf.urls import url
from rest_framework import routers
from django.urls import include

router = routers.DefaultRouter()
router.register('posts', PostView, 'posts')
router.register('votes', VoteView, 'votes')
router.register('comments', CommentView, 'comments')
router.register('alumni', AlumniView, 'alumni')
router.register('votealumni', VoteAlumniView, 'votealumni')
router.register('events', EventsView, 'events')
router.register('notes', NotesView, 'notes')

urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view())
]
