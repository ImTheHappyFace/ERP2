# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-05 07:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LMS', '0013_auto_20180105_1153'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='paperques',
            name='ques',
        ),
        migrations.AlterField(
            model_name='paper',
            name='questions',
            field=models.ManyToManyField(blank=True, to='LMS.Question'),
        ),
        migrations.DeleteModel(
            name='PaperQues',
        ),
    ]
