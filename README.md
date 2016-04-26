> Starter repo for [Angular](https://angularjs.org) + [ES6](https://git.io/es6features) + [JSPM](http://jspm.io/)

This repo is based on the JSPM version of [NG6 Stater](https://github.com/angularclass/NG6-starter/tree/jspm)
This repo serves as an extremely minimal starter for anyone looking to get up and running with Angular and ES6. Using a combo of [JSPM](http://jspm.io/) and [Gulp](http://gulpjs.com/) for building our files and assisting with boilerplate.
**This seed is not a yeoman generator!** Its just a minimal starter with tasks to build and create boilerplate. **Features include**:
* Best practice in file organization for Angular
* Frictionless package management and module loader with [JSPM](http://jspm.io)
* Ready to go build system for working with [ES6](https://git.io/es6features)
* Task for generating component boilerplate with angular, including test
* Testing system ready to go
___

# TOC
* [Testing](#Testing-Setup)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
        * [Gulp tasks](#gulp-tasks)
        * [Testing](#testing)
    * [Generating Components](#generating-components)


# Testing Setup
All test are written in ES6 too because why not! We use JSPM to take care of all the logistics of getting those files run in browsers just like our client files. Our setup is:

* Karma
* JSPM + Babel
* Jasmine

To run test just `npm test` or `karma start`. Read more about testing [below](#testing)


# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`
Once you have those, you should install these globals with `npm i -g`:
* `jspm`
* `gulp`
* `karma`
* `karma-cli`

## Installing
* `fork` me
* `clone` your fork
* `npm i` to install all dependencies
* (with JSPM there's usually a `jspm install` step too, but that is added to npm's `postinstall` for convenience)

#### Failing `npm install`
If this is your first time running JSPM, you'll probably run into a `warn Error - GitHub rate limit reached`

Fix this by adding your GitHub credentials to JSPM with: `jspm registry config github`.

## Running the app
NG6 uses Gulp to build and start the dev environment. After you have installed all dependencies you can now run the app.
Run `gulp` to start a dev server and watch all files. The port will displayed to you.

### Gulp tasks
Without Webpack's required build step, serving is easy and you choose when you are ready to build now

Here's a list of possible Gulp task to run:
* `dev`
  * starts a dev server with `browser-sync` serving the client folder and listens for changes
* `prod`
  * bundles our app into a single file with all included dependencies into `dist/`. both minified and unminified included

### Testing
To run test without coverate reports, just run `gulp test.unit`.
To run test with coverate reports, just run `gulp unit`.

The only difference from a regular `Karma` setup is the use of [`karma-jspm`](https://github.com/Workiva/karma-jspm) plugin to let JSPM handle spec files as modules. `Karma` will run all files that match `.spec.js` inside the `app` folder. This is awesome because we can write tests for our components in the same folder with the rest of the component. Be sure to include your `spec` files in the appropriate component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` extension, you must change the `jspm.loadFiles` glob in `karma.conf.js` to look for whatever file(s) you want.

## Generating components
* See [COMPONENT](./generator/COMPONENT.md) doc.
* See [FACTORY](./generator/FACTORY.md) doc.
* See [LAYOUT](./generator/LAYOUT.md) doc.
* See [VIEW](./generator/VIEW.md) doc.
