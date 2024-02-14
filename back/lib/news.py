import requests

news = requests.get("https://saurav.tech/NewsAPI/everything/cnn.json")

news = news.json()



print(news['articles'][0]['content'])