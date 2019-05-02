# Generated by Django 2.1.1 on 2019-05-01 04:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(max_length=30)),
                ('first_name', models.CharField(default='', max_length=30)),
                ('surname', models.CharField(default='', max_length=30)),
                ('username', models.CharField(default='', max_length=30)),
                ('age', models.IntegerField(default=0)),
                ('image_thumb', models.CharField(default='', max_length=30)),
                ('city', models.CharField(default='', max_length=30)),
                ('country', models.CharField(default='', max_length=30)),
            ],
        ),
    ]