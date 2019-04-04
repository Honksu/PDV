from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from djangover.models import CurrencyData

def index(request):

    data = CurrencyData.objects.filter(Currency="Exalted_Orb")
    context= {'data': data}
	return render(request, 'PDV/index.html', context = None)
