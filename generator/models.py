from django.db import models

# Create your models here.
class user(models.Model):
    Name=models.CharField(max_length=100)
    About=models.TextField(blank=True)
    College=models.CharField(max_length=100)
    Phone=models.PositiveIntegerField(blank=True)
    Email=models.EmailField(max_length=254)
    Skill1=models.CharField(max_length=100)
    Skill2=models.CharField(max_length=100)
    Skill3=models.CharField(max_length=100,blank=True)
    Skill4=models.CharField(max_length=100,blank=True)
    GitHub=models.CharField(max_length=50,blank=True)
    Twitter=models.CharField(max_length=50,blank=True)
    LinkedIn=models.CharField(max_length=50,blank=True)
    Instagram=models.CharField(max_length=50,blank=True)
    image=models.FileField(upload_to='upload',default='Your Image')
    def __str__(self):
        return self.Name