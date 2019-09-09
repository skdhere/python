from musicapp.forms import NewsletterForm
from django.shortcuts import render
from musicapp.models import Newsletter

def home(request):
   
	if request.method == "POST": 
		#Get the posted form
		newsletterFields = NewsletterForm(request.POST)	
		print(request.POST)
		if newsletterFields.is_valid():
			news = Newsletter()
			news.fname = newsletterFields.cleaned_data['fname']
			news.lname = newsletterFields.cleaned_data['lname']
			news.email_id = newsletterFields.cleaned_data['email_id']
			news.company = newsletterFields.cleaned_data['company']
			news.title = newsletterFields.cleaned_data['title']
			news.phonenumber = newsletterFields.cleaned_data['phonenumber']
			news.save()  
	else:
		newsletterFields = NewsletterForm() 	
	return render(request, "index.html")
