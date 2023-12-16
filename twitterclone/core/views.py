# coding: utf-8

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


from ninja import Router

from .schemas import ListTweetsSchema, TweetSchema, TweetSchemaIn


from .service import tweets_svc



router = Router()




@router.post("/tweets/add", response=TweetSchema)
@csrf_exempt
def add_tweet(request, tweet: TweetSchemaIn):
    new_tweet = tweets_svc.add_tweet(tweet.description)

    return JsonResponse(new_tweet)



@router.get("/tweets/list", response=ListTweetsSchema)

def list_tweets(request):
    tweets = tweets_svc.list_tweets()
    return JsonResponse({"tweets": tweets})
