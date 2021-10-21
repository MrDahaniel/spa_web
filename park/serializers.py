from django.contrib.auth.models import User

from rest_framework import serializers, fields

from park.models import Booking, Ticket


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username", "email"]


class TicketModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ["id", "name", "price"]


class TicketUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ["id", "name", "price"]


class BookingModelSerializer(serializers.ModelSerializer):
    date = fields.DateField(format="%Y-%m-%d", input_formats=["%y-%m-%d", "iso-8601"])

    class Meta:
        model = Booking
        fields = ["id", "ticket", "user", "date"]


class BookingCreateSerializer(serializers.ModelSerializer):
    date = fields.DateField(format="%Y-%m-%d", input_formats=["%y-%m-%d", "iso-8601"])

    class Meta:
        model = Booking
        fields = ["date", "ticket"]


class BookingUpdateSerializer(serializers.ModelSerializer):
    id = fields.IntegerField()
    date = fields.DateField(format="%Y-%m-%d", input_formats=["%y-%m-%d", "iso-8601"])

    class Meta:
        model = Booking
        fields = ["id", "ticket", "date"]
