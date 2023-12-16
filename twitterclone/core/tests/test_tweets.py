from unittest.mock import ANY

from twitterclone.accounts.models import User
from twitterclone.accounts.tests import fixtures
from twitterclone.core.models import Tweet


def test_criar_tweet_sem_login(client):
    resp = client.post("/api/core/tweets/add", {"new_tweet": "walk the dog"})
    assert resp.status_code == 401


def test_criar_tweet_com_login(client, db):
    fixtures.user_jon()
    client.force_login(User.objects.get(username="jon"))
    payload = {"description": "estudar pytest"}
    resp = client.post("/api/core/tweets/add", payload, content_type="application/json")
    assert resp.status_code == 200


def test_listar_tweet_com_login(client, db):
    fixtures.user_jon()
    Tweet.objects.create(description="walk the dog")

    client.force_login(User.objects.get(username="jon"))
    resp = client.get("/api/core/tweets/list")
    data = resp.json()

    assert resp.status_code == 200
    assert data == {
        "tweets": [{"description": "walk the dog", "done": False, "id": ANY}]
    }
