# Generated by Django 5.0.1 on 2024-02-24 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0004_rename_reviewmodel_review"),
    ]

    operations = [
        migrations.AddField(
            model_name="review",
            name="service",
            field=models.CharField(
                choices=[
                    ("electrolysis", "Електроепіляція"),
                    ("laser", "Лазерна епіляція"),
                ],
                default="electrolysis",
                max_length=20,
            ),
        ),
    ]
