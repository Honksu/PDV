from django.shortcuts import render

from django.http import JsonResponse
from datavis.models import CurrencyData
import json

def index(request):

    return render(request, 'datavis/index.html', context = None)
    
def pdv(request):

    if request.method == "POST":

        league = request.POST.get("league")
        currency = request.POST.get("currency")
        print(league)
        print(currency)
        query = {"League": league, "Currency": currency}

        return render(request, 'datavis/pdv.html', context = {"query": query})

    else:

        return render(request, 'datavis/index.html', context = None)

def fetchData(request, league, currency):

    currency = currency.replace("_", " ")

    data = CurrencyData.objects.filter(Currency = currency, League = league)
    
    return JsonResponse(list(data.values('date', 'Value')), safe=False)
