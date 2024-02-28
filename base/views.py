from django.shortcuts import render, redirect
from .forms import ReviewForm
from .models import review
from django.http import HttpResponse
from django.core import serializers

def main_page(request):
  return render(request, 'main_page.html')


def prices_offers(request):
  return render(request, 'electrolysis.html')

def laser(request):
  page = 'laser'
  context = {'page': page}
  return render(request, 'laser.html', context)

def laser_packages(request):
  page = 'laser-packages'
  context = {'page': page}
  return render(request, 'laser.html', context)




def reviews_page(request): 
  page = 'reviews' 
  context = {'page': page}
  return render(request, 'reviews.html', context)




def reviews_data(request): 
  data = serializers.serialize('json', review.objects.all())
  return HttpResponse(data, content_type='application/json')



def leave_review(request):
  page= 'leave-review'

  form = ReviewForm()  
  if request.method == 'POST': 
    review.objects.create(
      name = request.POST.get('name'),
      stars = request.POST.get('star-rating'),
      service = request.POST.get('service'),
      review_text = request.POST.get('description')) 
    return redirect('http://127.0.0.1:8000/reviews/')




  context = {'page': page, 'form': form}
  return render(request, 'leave-review.html', context)