# from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Player, Fixture, GroupStage, RegistrationStatus
from .serializers import PlayerSerializer, CreatePlayerSerializer, CreateTournamentSerializer, FixtureSerializer, GroupStageSerializer, CreateFeedbackSerializer, RegistrationStatusSerializer

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
    
class FixtureView(generics.ListAPIView):
    queryset = Fixture.objects.all()
    serializer_class = FixtureSerializer

class GroupStageView(generics.ListAPIView):
    queryset = GroupStage.objects.all()
    serializer_class = GroupStageSerializer

class CreateFeedbackView(APIView):
    serializer_class = CreateFeedbackSerializer

    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)

class RegistrationStatusView(generics.ListAPIView):
    queryset = RegistrationStatus.objects.all()
    serializer_class = RegistrationStatusSerializer