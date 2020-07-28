from django.urls import path
from . import views

app_name='diary'
urlpatterns = [
    path('', views.index, name='index'),
    path('entry/add/', views.add_entry, name='add'),
    path('entry/<int:entryId>/', views.edit_entry, name='edit'),
]