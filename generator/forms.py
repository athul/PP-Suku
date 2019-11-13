from django import forms

from .models import user

class userForm(forms.ModelForm):
    Name=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Name","class":"form-control"}))
    Bio=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Title of the Book",
    "class":"form-control"}))
    dob=forms.DateField(widget=forms.DateInput(attrs={"type":"text","class":"form-control","placeholder":"Enter your DOB like 08/07/2000"}))
    College=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your College/University Name","class":"form-control"}))
    Phone=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Phone Number","class":"form-control"}))
    Email=forms.EmailField(widget=forms.EmailInput(attrs={"placeholder":"Your Email","class":"form-control"}))
    Designations=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Designations","class":"form-control"}))

    Skill1=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Main Skill","class":"form-control"}))
    Skill2=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Second Main Skill","class":"form-control"}))
    Skill3=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Showoff Skill","class":"form-control"}))
    Skill4=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Ship-It Skill","class":"form-control"}))

    GitHub=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your GitHub ID","class":"form-control"}))
    Twitter=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Twitter Username","class":"form-control"}))
    LinkedIn=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your LinkedIn ID","class":"form-control"}))
    Instagram=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Your Instagram handle","class":"form-control"}))

    Bio=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Title of the Book","class":"form-control"}))
    Bio=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Title of the Book","class":"form-control"}))
    Bio=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Title of the Book","class":"form-control"}))
    Bio=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Title of the Book","class":"form-control"}))

    class Meta:
        model = user
        fields = ("__all__")
