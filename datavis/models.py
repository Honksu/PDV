from django.db import models
from datetime import datetime


'''
Model for a spesific currency's data in spesific league on spesific time.
'''
class CurrencyData(models.Model):

    League = models.CharField(max_length=50, blank=False)
<<<<<<< HEAD
    date = models.CharField(max_length = 50, blank=False)
=======
    date = models.DateField(blank=False)
>>>>>>> e2bf2a934fd101535a3a3f7238c42857b6893c32
    Currency = models.CharField(max_length = 100, blank=False)
    PriceCurrency = models.CharField(max_length = 100, blank=False)
    Value = models.FloatField(blank=False)
    CurrencyID = models.IntegerField(blank=False)
