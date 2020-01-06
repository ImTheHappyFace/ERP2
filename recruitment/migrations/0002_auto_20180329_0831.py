# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-29 08:31
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0011_auto_20180328_0806'),
        ('recruitment', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='jobs',
            old_name='job',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='jobs',
            old_name='skills',
            new_name='skill',
        ),
        migrations.AddField(
            model_name='jobs',
            name='department',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='department_a', to='organization.Departments'),
        ),
        migrations.AddField(
            model_name='jobs',
            name='role',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='position_a', to='organization.Roles'),
        ),
        migrations.AddField(
            model_name='jobs',
            name='unit',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='unit_a', to='organization.Units'),
        ),
    ]