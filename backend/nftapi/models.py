import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import date



class CustomUser(AbstractUser):
    confirm_pass = models.CharField('Подтверждение пароля', max_length=255)
    birth_date = models.DateField('Дата рождения', default=f'{date.today()}')
