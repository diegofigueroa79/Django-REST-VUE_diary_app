from django.db import models

# Create your models here.
class Entry(models.Model):
    title = models.CharField(max_length=65)
    text = models.TextField(max_length=255)
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title