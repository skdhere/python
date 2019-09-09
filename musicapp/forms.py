from django import forms

class NewsletterForm(forms.Form):
	fname = forms.CharField(max_length = 50)
	lname = forms.CharField(max_length = 50)
	email_id = forms.CharField(max_length = 100)
	phonenumber = forms.CharField(max_length = 12)
	title = forms.CharField(max_length = 50)
	company = forms.CharField(max_length = 50)
