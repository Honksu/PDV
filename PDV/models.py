from django.db import models
from datetime import datetime


'''
Model for a spesific currency's data in spesific league on spesific time.
'''
class CurrencyData(models.Model):

    League = models.CharField(max_length=50, blank=False)
    date = models.DateField(blank=False)
    Currency = models.CharField(max_length = 100, blank=False)
    PriceCurrency = models.CharField(max_length = 100, blank=False)
    Value = models.float(blank=False)
    CurrencyID = models.AutoField(blank=False)
    
