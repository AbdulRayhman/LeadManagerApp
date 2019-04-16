from .models import Lead
from rest_framework import viewsets, permissions
from .serializer import LeadSerializers


class LeadViewSets(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_class = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializers
