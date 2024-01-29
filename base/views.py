from django.shortcuts import render

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