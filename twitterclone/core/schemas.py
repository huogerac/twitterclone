from typing import List, Optional

from ninja import Schema


class TweetSchemaIn(Schema):
    description: str


class TweetSchema(Schema):
    id: Optional[int]
    description: str
    done: bool = False


class ListTweetsSchema(Schema):
    tweets: List[TweetSchema]
