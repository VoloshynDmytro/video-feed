# Video Feed App
I recommend use docker for dev/prod server and testing purposes,
you could read details how to use it in this project at __HOW_TO_USE_DOCKER.md__

Or you can use it without docker

Serve app in development mode:
```bash
NODE_ENV=development npm run serve
```
Run tests:

```bash
NODE_ENV=test npm run test

or

NODE_ENV=test npm run test:debug 
```
Run linter: 
```bash
npm run lint
```

Build assets: 
```bash
NODE_ENV=production npm run build
```

__You could run e2e test only via docker-compose.__

### Webpack
Client uses Webpack for bundling modules. There are 3 types of Webpack configs provided 
`webpack.common.config.js` (for common config which used for both development and production)
`webpack.development.config.js` (for development), `webpack.production.config.js` (for production).

#### Key features:

* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Bundling the app
* Loading all modules

Application available at `http://localhost:3001`

### NPM Tasks
Here's a list of available tasks:

* `serve` - serving code (dev server) via `webpack-dev-server` with live reload (re-building assets) on file changes.
* `build` - build all assets (bundle) + prepare it for production (uglifying, compressing) and put them to `dist` folder.
* `test` - run unit/integration tests.
* `test:e2e` - run e2e tests using `protractor`
* `lint` - runs linter to check for lint errors
  
### File structure

This directory contains all components, routes, modules, specs/

#### `src/common`
This folder contains all the common components which are reused in whole app (like header, sidebar)

#### `src/core`
This folder app-wide services (like Auth Service), hooks, filters directives, core configs, providers, 
3-rd party libs configs and other stuff like that.

#### `src/components`
Components are the way of organising different domain-specific modules (features) in the project.

### Importing Assets
Assets can be kept where you want and can be imported into your js files or css files. 
Those fill be served by webpack in development mode and copied to the dist folder during production.

### ES6 support
We use babel to transpile code in client with `stage-0` plugin. 
So, you can use both ES6 and experimental ES7 features.


