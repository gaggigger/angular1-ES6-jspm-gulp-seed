**Angular 1.x, ES6, JSPM Starter**

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Credit goes to [NG6 Stater](https://github.com/angularclass/NG6-starter/tree/jspm) for the basic structure of [Angular](https://angularjs.org) + [ES6](https://git.io/es6features) + [JSPM](http://jspm.io/).
Modifications have been made to push the structure to facilitate stable, scalable, mature software.

This repo serves as an extremely minimal starter for anyone looking to 
get up and running with Angular and ES6. Using a combo of [JSPM](http://jspm.io/) 
and [Gulp](http://gulpjs.com/) for building our files and assisting with boilerplate.


**This seed is not a yeoman generator!** Its just a minimal starter with tasks 
to build and create boilerplate. **Features include**:
* Best practice in file organization for Angular
* Frictionless package management and module loader with [JSPM](http://jspm.io)
* Ready to go build system for working with [ES6](https://git.io/es6features)
* [SC5 Style Guide Generator](http://styleguide.sc5.io/)
* [ESDoc generator](https://esdoc.org/)
* Task for generating components, views, layouts, and services boilerplate with angular, including tests.
* Testing system ready to go

___

# TOC
* [Walkthrough](#walkthrough)
    * [What about Webpack?](#how-is-this-different-than-webpack)
    * [Build system](#build-system)
    * [File structure](#file-structure)
        * [ng prefix](#ng-prefix)        
        * [Layouts](#layouts)
        * [Views](#views)
        * [Components](#components)
        * [Services](#services)
* [Testing](#Testing-Setup)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Commitizen](#commitizen)
    * [Installing](#installing)
        * [Installing lodash-es](#installing-lodash-es)
    * [Running the app](#running-the-app)
        * [Gulp tasks](#gulp-tasks)
        * [Testing](#testing)
    * [Generating Components](#generating-components)

# Walkthrough
## How is this different than Webpack?
Webpack builds your application into a single package before you serve it to the client. JSPM is different for two major reasons:
 1. JSPM is built ontop of [SystemJS](https://github.com/systemjs/systemjs) which uses a polyfill for the new ES6 module loader that will eventually be supportedly natively. This means that there is no intermediate build process before your files are served. Instead, the module loader will load (and transpile) only the files it needs at runtime. When you're ready for deployment, JSPM can also bundle your app for production (very much like webpack here).
 2. JSPM abstracts dependency management. You can `jspm install` any package that lives on bower, npm, or github and use the ES6 `import` syntax all the same on them.
 3. It features live reload. Yes you read that right-any change in JS file will reload only those modules, which are affected. You can read more about it on project page: [jspm-hot-reloader](https://github.com/capaj/jspm-hot-reloader)

## Build System
This branch of NG6 uses the power of JSPM and Gulp together for its build system. Yes, you don't need Gulp if you're using JSPM. This is true if your build system is only responsible for file manipulation, which ours is not.

`JSPM` does most of the heavy lifting here, it handles:
* Dependency management. Download external modules from npm, bower, or straight from github
* Dynamic transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Loading CSS files and appending the styles to the DOM
* Loading any and all modules
* Doing the same for testing as well

`Gulp` is like the orchestrator, it handles:
* Starting a dev server
* Refreshing the browser on file changes
* Generate boilerplate for our angular app
* Building a production version of our app ready for deployment

## File Structure
We use the component approach in NG6. This will be a standard if using 
the new router in angular and a great way to ensure easy transition to 
Angular 2. Everything or mostly everything is a component. A component 
is a self contained app basically. It has its own style, template, 
controllers, routing, specs, etc. All capsulated in its own folder.

A component architecture may look a little different based on it's 
purpose. Some will be a directives, a ui-router view, or an angular service.

A component in this architecture is an angular 1.x 
directive. Layouts, views, and services are also components because
they are self-contained angular modules ( apps ), though designed
for a very specific purpose and namespaced accordingly.

The basic architecture of components may be:

__app
       |__layouts
                |__views
                |      |__component A
                |      |            |__service A
                |      |__component B
                |                   |__service B
                |__serviceA
                |__serviceB

### ng prefix
Files that contain angular specific code are prefixed with `_ng`. This 
isolates angular 1.x code to files for ease of upgrading to another 
architecture -- angular 2.x.

### Layouts
Where at the app level you have `layouts`. Layouts are an html/css shell
that is shared app wide. Think navigation, log out buttons, search fields.
A layout has a `ui-view="content"` container for views.

### Views
A `view` is the routing endpoint of a view that comprises a layout. For example,
if two layouts -- one for sales and one for support, each have it's own nav
components -- you may have a generic contact form that may receive different 
information for sales and support, you can place this contact view in both the 
sales layout and support layouts and have different routes to map the forms:

>   `#/sales/contact`
>   `#/support/contact`

### Components
A component is an angular directive using a controller with a scope object
to isolate scope. Done.

### Services
A service is an angular factory with an ES6 class. Care is taken to 
keep the class separate from angular's architecture for ease of upgrade
to angular 2.

### File structure:
```
client
--index.html
--app/
----app.js * entry file for app
----components/ * where most of components live
------_ng.components.js * entry file for components
------component.hero/ * hero component
----------_ng.js * angular code entry file
----------_ng.component.js * directive for home
----------hero.controller.js * controller class for hero
----------hero.scss * styles for home
----------hero.html * template for home
----------hero.spec.js * specs for home
----layouts/ * shells for html/css layouts
------_ng.layouts.js * entry file for layouts
------layout.home/ * home layout
----------_ng.js * angular code entry file
----------_ng.routes.js * ui-router configuration
----------home.scss * styles for home
----------home.html * template for home
----------home.spec.js * specs for home----layouts/ * shells for html/css layouts
------_ng.layouts.js * entry file for layouts
----services/ * shells for html/css services
------factory.angularES6Class/ * home layout
----------_ng.js * angular code entry file
----------angularES6Class.factory.js * es6 class for service
----------angularES6Class.factory.spec.js * spec for for service----services/ * shells for html/css services
----views/ * shells for html/css services
------view.home/ * home view
----------_ng.js * angular code entry file
----------_ng.routes.js * ui-router configuration
----------home.controller.js * controller class for home
----------home.html * template for home
----------home.scss * styles for home
----------home.spec.js * specs for home
```

# Testing Setup
All test are written in ES6 too because why not! We use JSPM to take care of all the logistics of getting those files run in browsers just like our client files. Our setup is:

* Karma
* JSPM + Babel
* Jasmine

To run test just `npm test` or `karma start`.
To run test without coverate reports, just run `gulp unit.nocoverage`.
To run test with coverate reports, just run `gulp unit`.

The only difference from a regular `Karma` setup is the use of [`karma-jspm`](https://github.com/Workiva/karma-jspm) plugin to let JSPM handle spec files as modules. `Karma` will run all files that match `.spec.js` inside the `app` folder. This is awesome because we can write tests for our components in the same folder with the rest of the component. Be sure to include your `spec` files in the appropriate component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` extension, you must change the `jspm.loadFiles` glob in `karma.conf.js` to look for whatever file(s) you want.


# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`
Once you have those, you should install these globals with `npm i -g`:
* `jspm`
* `gulp`
* `karma`
* `karma-cli`

# Commitizen
Commitizen is installed locally, along with the cz-conventional-changelog adapater. 
See the [Commitizen README.md](https://github.com/commitizen/cz-cli) for usage 
and configuration.


## Installing
* `fork` me
* `clone` your fork
* `npm i` to install all dependencies
* (with JSPM there's usually a `jspm install` step too, but that is added to npm's `postinstall` for convenience)

#### Failing `npm install`
If this is your first time running JSPM, you'll probably run into a `warn Error - GitHub rate limit reached`

Fix this by adding your GitHub credentials to JSPM with: `jspm registry config github`.

### Installing lodash-es
 See [Install Lodash](./docs/install/LODASH.md) doc.

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
* `unit.nocoverage`
  * run unit tests without test coverage report.
* `unit`
  * run unit tests with test coverage report.
* `styleguide`
  * run the styleguide generator and serve the app.
* `esDoc`
  * run the es6 doc generator and serve the app.
* `component`
  * create a component. See the [COMPONENT](./docs/generator/COMPONENT.md) doc.
* `factory`
  * create a factory service. See the [FACTORY](./docs/generator/FACTORY.md) doc.
* `layout`
  * create a layout. See the [LAYOUT](./docs/generator/LAYOUT.md) doc.
* `view`
  * create a view. See the [VIEW](./docs/generator/VIEW.md) doc.

## Generating components
* See [COMPONENT](./docs/generator/COMPONENT.md) doc.
* See [FACTORY](./docs/generator/FACTORY.md) doc.
* See [LAYOUT](./docs/generator/LAYOUT.md) doc.
* See [VIEW](./docs/generator/VIEW.md) doc.





