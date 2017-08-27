# Video Feed App


### Setup

There are docker configurations for both development and production.

__Before you can setup the project, you should install:__
* Docker
* Docker Compose

#### Development server

For serving client-side (front-end) assets client with live-reload (rebuilding) on file changes 
we are using `webpack-web-server` and `nodemon` for running and serving server-side codebase. 
Setup project (installing deps, configuring it, etc.) and using those tools handle `Docker` via
`Docker Compose`.

To get it up and running, follow these steps:

```bash
git clone 

cd video-feed

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# wait a little while
```

###### Installing dependencies

```bash
npm install --save <dependency>

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

#### Production build

To prepare our project for deployment on production server, we should first build and bundle all 
client-side assets, compress (uglify), minify and then put them to `dist` folder.
After that static assets would be ready to put them in `nginx` shared html folder 
inside `docker container` which will make them available to serve.

```bash
git clone 

cd video-feed

docker-compose -f docker-compose.yml up

```

## See it in action

Application available at `http://localhost:3001` for DEVELOPMENT
and `http://localhost:8080` for PRODUCTION
 
 ## Testing
 To run all __unit and integration__ tests
 you could run command:
  ```bash
  docker-compose -f docker-compose.test.yml up --build
 ```
 
 You can run your __e2e (protractor)__ test inside container:
 
 ```bash
 docker-compose -f docker-compose.yml -f docker-compose.test-e2e.yml up --build
```