from ..models import Tweet


def add_tweet(new_tweet):
    tweet = Tweet(description=new_tweet)
    tweet.save()
    return tweet.to_dict_json()


def list_tweets():
    tweets = Tweet.objects.all()
    return [item.to_dict_json() for item in tweets]
