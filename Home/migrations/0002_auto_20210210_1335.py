# Generated by Django 3.1.6 on 2021-02-10 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('designation', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('image', models.ImageField(upload_to='media/testimonials/%Y/%m/%d/')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Testimonials',
        ),
    ]
