from django.db import models

# Create your models here.
class user(models.Model):
    Name=models.CharField(max_length=100)
    About=models.TextField(blank=True)
    College=models.CharField(max_length=100)
    Phone=models.PositiveIntegerField(blank=True)
    Email=models.EmailField(max_length=254)
    Skill1=models.CharField(max_length=100,default="")
    Skill2=models.CharField(max_length=100,default="")
    Skill3=models.CharField(max_length=100,blank=True,default="")
    Skill4=models.CharField(max_length=100,blank=True,default="")
    GitHub=models.CharField(max_length=50,blank=True,default="")
    Twitter=models.CharField(max_length=50,blank=True,default="")
    LinkedIn=models.CharField(max_length=50,blank=True,default="")
    Instagram=models.CharField(max_length=50,blank=True,default="")
    image=models.FileField(upload_to='upload',default='Your Image')
    def __str__(self):
        return self.Name