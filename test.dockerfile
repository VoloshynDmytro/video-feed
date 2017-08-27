FROM node:6

LABEL version="1.0"
LABEL maintainer="dmytro.voloshyn"

RUN useradd --user-group --create-home --shell /bin/false video-feed

ENV APP_NAME "app"
ENV APP_USER "video-feed"
ENV HOME /home/$APP_USER
ENV APP_DIR $HOME/$APP_NAME

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

RUN mkdir -p $APP_DIR

RUN chown -R $APP_USER:$APP_USER $HOME/*

RUN npm install -g webpack-dev-server

USER $APP_USER

WORKDIR $APP_DIR

COPY package.json $APP_DIR

RUN npm install && npm cache clean

COPY . $APP_DIR


