from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main-page'),
    path('electrolysis/', views.prices_offers, name='electrolysis'),
    path('laser/', views.laser, name='laser'),
    path('laser-packages/', views.laser_packages, name='laser-packeges'),
    path('reviews/', views.reviews_page, name='reviews'),
    path('reviews-data/', views.reviews_data, name='reviews-data'),
    path('leave-review/', views.leave_review, name='leave-review')
    ]
