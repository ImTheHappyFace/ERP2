# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-02-05 07:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('POS', '0017_auto_20180205_0702'),
    ]

    operations = [
        migrations.AddField(
            model_name='invoice',
            name='modeOfPayment',
            field=models.CharField(choices=[('card', 'card'), ('netBanking', 'netBanking'), ('cash', 'cash'), ('cheque', 'cheque')], max_length=10, null=True),
        ),
    ]
