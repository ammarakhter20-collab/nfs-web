import os
import django
from datetime import date

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import News, Game

def seed():
    # Clear existing data
    News.objects.all().delete()
    Game.objects.all().delete()

    # Seed Games
    games = [
        {
            "title": "Need for Speed Unbound",
            "description": "The world is your canvas in Need for Speed Unbound. Prove you have what it takes to win The Grand, Lakeshore's ultimate street racing challenge.",
            "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Need_for_Speed_Unbound_cover_art.jpg/220px-Need_for_Speed_Unbound_cover_art.jpg",
            "release_date": date(2022, 12, 2),
            "store_url": "https://www.ea.com/games/need-for-speed/need-for-speed-unbound/buy"
        },
        {
            "title": "Need for Speed Heat",
            "description": "Hustle by day and risk it all by night in Need for Speed Heat, a white-knuckle street racer that pits you against a city's rogue police force.",
            "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Need_for_Speed_Heat_cover_art.jpg/220px-Need_for_Speed_Heat_cover_art.jpg",
            "release_date": date(2019, 11, 8),
            "store_url": "https://www.ea.com/games/need-for-speed/need-for-speed-heat/buy"
        }
    ]

    for game_data in games:
        Game.objects.create(**game_data)

    # Seed News
    news_items = [
        {
            "title": "Vol 9 Content Update Now Live",
            "excerpt": "Dive into the latest update for NFS Unbound with new cars, challenges, and improved police chases.",
            "content": "Full detail content about the update...",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", # Placeholder Pikachu art for demo, user can update in admin
            "category": "UNBOUND"
        },
        {
            "title": "Introducing the 1995 BMW M3 Legends Edition",
            "excerpt": "A classic returns to the streets of Lakeshore. Unlock this legend today.",
            "content": "Full detail content about the car...",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BMW_M3_E30.jpg/280px-BMW_M3_E30.jpg",
            "category": "ALL"
        }
    ]

    for news_data in news_items:
        News.objects.create(**news_data)

    print("Database seeded successfully!")

if __name__ == "__main__":
    seed()
