from django.shortcuts import render, redirect
from .forms import ReviewForm
from .models import review
from django.http import HttpResponse
from django.core import serializers
from django.core.mail import send_mail

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
    
    messege_body = f'''
    {request.POST.get('name')} 
    {request.POST.get('star-rating')} stars
    {request.POST.get('service')}
    {request.POST.get('description')}
    '''

    send_mail('Новий відгук на сайті', messege_body, 'nastaskacenko02@gmail.com', ['skachenkoa@gmail.com'] )


    return redirect('http://127.0.0.1:8000/reviews/')




  context = {'page': page, 'form': form}
  return render(request, 'leave-review.html', context)


def contact(request):
  page = 'contact'
  context = {'page': page}
  return render(request, 'contact.html', context)




def sertificates(request):
  page = 'sertificates'
  image_urls = [f"images/sertificate-{i}.jpg" for i in range(1, 7)]
  context = {'page': page, 'image_urls': image_urls}
  return render(request, 'sertificates.html', context)