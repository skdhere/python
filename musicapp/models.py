from django.db import models

# Create your models here.

class Newsletter(models.Model):
	fname = models.CharField(max_length = 50)
	lname = models.CharField(max_length = 50)
	email_id = models.CharField(max_length = 100)
	phonenumber = models.CharField(max_length = 12)
	title = models.CharField(max_length = 50)
	company = models.CharField(max_length = 100)
	
