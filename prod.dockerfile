FROM nginx:latest

LABEL version="1.0"
LABEL maintainer="dmytro.voloshyn"

ARG NODE_ENV

# tweak nginx config
RUN sed -i -e"s/worker_processes  1/worker_processes 5/" /etc/nginx/nginx.conf && \
sed -i -e"s/keepalive_timeout\s*65/keepalive_timeout 2/" /etc/nginx/nginx.conf && \
sed -i -e"s/keepalive_timeout 2/keepalive_timeout 2;\n\tclient_max_body_size 100m/" /etc/nginx/nginx.conf

# nginx site conf
COPY ./config/config.nginx /etc/nginx/conf.d/default.conf

RUN apt-get update && \
  apt-get install -y \
    curl \
    gnupg && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
  apt-get update && \
  apt-get install -y nodejs && \
  rm -rf /var/lib/apt/lists/*

ENV APP_DIR /home/video-feed

RUN mkdir -p $APP_DIR

COPY . $APP_DIR

WORKDIR $APP_DIR

RUN npm install --production=false && npm cache clean

RUN rm -rf dist/*

#  build all assets via webpack
RUN NODE_ENV=$NODE_ENV npm run build

# Copy app folder where your AngularJS is.

RUN cp -r dist/* /usr/share/nginx/html/

EXPOSE 80