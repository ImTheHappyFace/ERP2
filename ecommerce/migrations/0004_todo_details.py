# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2020-01-02 08:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0003_auto_20200102_0636'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='details',
            field=models.CharField(max_length=40, null=True),
        ),
    ]