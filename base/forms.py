from django.forms import ModelForm
from .models import review

class ReviewForm(ModelForm):
  class Meta:
    model = review
    fields = '__all__'