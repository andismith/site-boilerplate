# Site Boilerplate
> A complete site boilerplate for @andismith&#x27;s personal projects

[![Build Status](https://travis-ci.org/andismith/site-boilerplate.png?branch=master)](https://travis-ci.org/)
Version 0.0.4

## Getting Started
This boilerplate requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

## Installation
1. [Fork the repo](https://github.com/andismith/site-boilerplate/fork)
1. `git clone https://github.com/andismith/site-boilerplate.git`
1. `cd site-boilerplate`
1. Install project dependencies with `npm install`
1. Make sure you have the Grunt command-line interface with `npm install -g grunt-cli`
1. Install SASS 3.3.0 with `gem install sass --pre` for Source Maps
1. Run Grunt with `grunt` for development build, watch and server
1. Run Grunt with `grunt` [`dev` | `prod`] for development/production build

## Features
* Seperate source `src` and distribution `dist` folders
* Watches files and runs a partial compliation on the files that have changed
* Runs on `localhost:3000`
* Assemble Templating - With Handlebars
* Styles - Normalize resets, auto-prefixing and SASS compliation
* JavaScript - JSHint, Source Maps and Uglification
* JSON - Site Configuration and Linting
* Images - Image Minification
* Latest jQuery, Modernizr, RequireJS and lodash
* Version number incremental updates
* Gruntfile hinting
* Production build tasks with `grunt prod`

## Roadmap
* Add Common Styles
* Require JS
* Jasmine Testing
* Sitemap.xml using Assemble

## Additional Information
### Pushing to Github Pages
1. Ensure git subtree is installed. `$git clone https://github.com/apenwarr/git-subtree` and `sh install.sh`
1. From the root run: `git subtree push --prefix dist origin gh-pages --force`

## Issues and Feedback
Found an issue, have an idea? [github.com/andismith/site-boilerplate/issues](https://github.com/andismith/site-boilerplate/issues)