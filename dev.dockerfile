FROM node:6

LABEL version="1.0"
LABEL maintainer="dmytro.voloshyn"

RUN useradd --user-group --create-home --shell /bin/false video-feed

ENV APP_NAME "app"
ENV APP_USER "video-feed"
ENV HOME /home/$APP_USER
ENV APP_DIR $HOME/$APP_NAME

RUN mkdir -p $APP_DIR

RUN chown -R $APP_USER:$APP_USER $HOME/*

RUN npm install -g webpack-dev-server

USER $APP_USER

WORKDIR $APP_DIR

COPY package.json $APP_DIR

RUN npm install && npm cache clean

COPY . $APP_DIR