from django.db import models

class review(models.Model):
  name = models.CharField(max_length=100, error_messages={'required': 'Будь ласка вкажіть ваше ім\'я'})
  stars = models.CharField(max_length=100, error_messages={'required': 'Будь ласка оцініть сервіс'})
  service = models.CharField(max_length=100)
  review_text = models.TextField(null=True)
  created = models.DateTimeField(auto_now_add=True)


  class Meta:
        ordering = ['-created']
