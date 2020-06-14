This application is hosted at: http://goochie-pooch.com

# heroku installation

```sh
brew tap heroku/brew && brew install heroku

heroku login -i

heroku apps

cd ~/myapp

yarn build

heroku create
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static

heroku git:remote -a goochie-pooch-v2

git push heroku master

heroku open

```

#Links

- [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
- [https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)
- [https://medium.com/@tcguy/a-beginner-friendly-guide-to-configure-godaddy-custom-domain-names-to-heroku-app-2019-edition-3561c721762](https://medium.com/@tcguy/a-beginner-friendly-guide-to-configure-godaddy-custom-domain-names-to-heroku-app-2019-edition-3561c721762)
- [https://dev.to/marwan01/deploy-a-vue-js-app-to-heroku-30m](https://dev.to/marwan01/deploy-a-vue-js-app-to-heroku-30m)
