# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-15 04:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finance', '0018_auto_20180314_0450'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expensesheet',
            name='approved',
            field=models.CharField(default='Yes', max_length=30, null=True),
        ),
    ]
