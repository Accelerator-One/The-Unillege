from django.contrib import admin
from .models import Testimonial
from django.utils.html import format_html
# Register your models here.

class TestimonialAdmin(admin.ModelAdmin):
    def displayImage(self, object):
        return format_html('<img src="{}" width="40" />'.format(object.image.url))
    list_display = ('id', 'displayImage', 'first_name', 'designation', 'created_date')
    list_display_links = ('id', 'first_name')
    search_fields = ('first_name', 'designation')
    list_filter = ('designation', 'created_date')

admin.site.register(Testimonial, TestimonialAdmin)