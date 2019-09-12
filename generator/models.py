from django.db import models
import datetime
# Create your models here.
class main(models.Model):
    id=models.AutoField(primary_key=True)
    Users=models.ForeignKey('user',on_delete=models.CASCADE)
class user(models.Model):
    Name=models.CharField(max_length=100,default="")
    Bio=models.TextField(blank=True,default="")
    College=models.CharField(max_length=100,default="")
    dob=models.DateField(default=datetime.date.today())
    Phone=models.BigIntegerField(blank=True)
    Email=models.EmailField(max_length=254,default="")
    Designations=models.CharField(max_length=150,default="")
    #Skills
    Skill1=models.CharField(max_length=100,default="")
    Skill2=models.CharField(max_length=100,default="")
    Skill3=models.CharField(max_length=100,blank=True,default="")
    Skill4=models.CharField(max_length=100,blank=True,default="")
    #Profiles
    GitHub=models.CharField(max_length=150,blank=True,default="")
    Twitter=models.CharField(max_length=150,blank=True,default="")
    LinkedIn=models.CharField(max_length=150,blank=True,default="")
    Instagram=models.CharField(max_length=150,blank=True,default="")
    #Projects
    Project1=models.CharField(max_length=50,default="")
    Project1desc=models.CharField(max_length=150,default="")
    Projecturl1=models.URLField(max_length=150,default="")
    Project2=models.CharField(max_length=50,default="")
    Project2desc=models.CharField(max_length=150,default="")
    Projecturl2=models.URLField(max_length=50,default="")
    Project3=models.CharField(max_length=50,default="")
    Project3desc=models.CharField(max_length=150,default="")
    Projecturl3=models.URLField(max_length=50,default="")
    Project4=models.CharField(max_length=50,default="")
    Project4desc=models.CharField(max_length=150,default="")
    Projecturl4=models.URLField(max_length=150,default="")
    #Images
    #image=models.FileField(upload_to='upload',default='Your Image')
    def __str__(self):
        return self.Name