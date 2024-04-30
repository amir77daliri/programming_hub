from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from problemset.views import root_page

urlpatterns = [
    path('home/', root_page),
    path('admin/', admin.site.urls),
    path('users/', include('Users.urls')),
    path('problemset/', include('problemset.urls')),
    path('contests/', include('competitions.urls')),
    path('markdownx/', include('markdownx.urls')),
    # path('ckeditor/', include('ckeditor_uploader.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
