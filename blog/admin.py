from django.contrib import admin
from .models import blog
# Register your models here.
class blogAdmin(admin.ModelAdmin):
    list_display = ('id','author_name','category', 'is_featured')
    search_fields = ('author_name', 'category')
    list_filter = ('category',)
    list_display_links = ('id', 'author_name')
admin.site.register(blog, blogAdmin)
