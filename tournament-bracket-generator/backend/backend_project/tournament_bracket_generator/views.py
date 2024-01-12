# from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Player
from .serializers import PlayerSerializer, CreatePlayerSerializer, CreateTournamentSerializer

# class PlayerView(APIView):
#     def get(self, request):
#         # all_players = Player.objects.order_by('first_name')
#         all_players = Player.objects.all()
#         serializer = PlayerSerializer(all_players, many=True)
#         return Response(serializer.data)

class PlayerView(generics.ListAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


    # def post(self, request):
    #     serializer = PlayerSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=201)
    #     return Response(serializer.errors, status=400)

class CreatePlayerView(APIView):
    serializer_class = CreatePlayerSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        # serializer = CreatePlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class CreateTournamentView(APIView):
    serializer_class = CreateTournamentSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)