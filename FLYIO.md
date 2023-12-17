https://fly.io/blog/deploying-django-to-production/

fly launch
fly secrets list
fly deploy
fly secrets set ALLOWED_HOSTS="twitterclone.fly.dev"
fly secrets set CSRF_TRUSTED_ORIGINS="https://twitterclone.fly.dev"
fly open

fly status
fly ssh console -a twitterclone
fly logs --debug

TODO:
github actions para fazer o deploy
