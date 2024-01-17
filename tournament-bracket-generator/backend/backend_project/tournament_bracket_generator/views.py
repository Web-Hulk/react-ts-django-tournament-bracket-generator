# from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Player, Fixture
from .serializers import PlayerSerializer, CreatePlayerSerializer, CreateTournamentSerializer, FixtureSerializer, CreateFeedbackSerializer

class PlayerView(generics.ListAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class CreatePlayerView(APIView):
    serializer_class = CreatePlayerSerializer

    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)
    
class CreateTournamentView(APIView):
    serializer_class = CreateTournamentSerializer

    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)
    
class FixtureView(APIView):
    queryset = Fixture.objects.all()
    serializer_class = FixtureSerializer

class CreateFeedbackView(APIView):
    serializer_class = CreateFeedbackSerializer

    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)