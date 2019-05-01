from django.shortcuts import render

from django.http import JsonResponse
from datavis.models import CurrencyData
import json

def index(request):

    return render(request, 'datavis/index.html', context = None)
    
def pdv(request):

    return render(request, 'datavis/pdv.html', context = None)

def prices_of_league(request):

    data = CurrencyData.objects.filter(Currency = 'Exalted Orb', League = 'Abyss')
    
    return JsonResponse(list(data.values('date', 'Value')), safe=False)