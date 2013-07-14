# Site Boilerplate
> A complete site boilerplate for @andismith&#x27;s personal projects

[![Build Status](https://travis-ci.org/andismith/site-boilerplate.png?branch=master)](https://travis-ci.org/)
Version 0.0.5

## Project Goal
To produce feature-full static HTML sites in next to no time.

## Getting Started
This boilerplate requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

## Installation
1. [Fork the repo](https://github.com/andismith/site-boilerplate/fork)
1. `git clone https://github.com/andismith/site-boilerplate.git`
1. `cd site-boilerplate`
1. Install project dependencies with `npm install`
1. Make sure you have the Grunt command-line interface with `npm install -g grunt-cli`
1. Install SASS 3.3.0.alpha.198 with `gem install sass --pre` for Source Maps
1. Run Grunt with `grunt` for development build, watch and server
1. Run Grunt with `grunt` [`dev` | `prod`] for development/production build

## Features
* Seperate source `src` and distribution `dist` folders
* Watches files and runs a partial compliation on the files that have changed
* Runs on `localhost:3000`
* [Assemble Templating](https://github.com/assemble/assemble) with [Handlebars](http://handlebarsjs.com)
* Styles - [Normalize CSS resets](http://necolas.github.io/normalize.css), auto-prefixing, SASS compliation, Source Maps
* JavaScript - JSHint, Source Maps and Uglification
* JSON - Site Configuration and Linting
* Images - Image Minification
* Latest [jQuery](http://jquery.com), [Modernizr](http://modernizr.com), RequireJS and [Lo-Dash](http://lodash.com)
* Version number incremental updates
* Gruntfile hinting
* Production build tasks with `grunt prod`

## Additional Information
### Pushing to Github Pages
1. Ensure git subtree is installed. `$git clone https://github.com/apenwarr/git-subtree` and `sh install.sh`
1. From the root run: `git subtree push --prefix dist origin gh-pages --force`


### Setting Up The Ultimate Reloading Workspace
You can edit files directly in the browser in Chrome Canary. Canary shows the dist folder, but you can edit the src folder. Grunt will auto rebuild and LiveReload will load your changes.
* Download [Live Reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
* Go to [Chrome Flags](chrome://flags)
* Enable Developer Tool Experiments, Restart
* Go to Settings, and enable Sass stylesheet debugging
* Restart developer tools
* Go to General and Enable Source Maps
* Go to Workspace and add the `src` folder
* Go to Sources, right click a SASS or JS file and Enable Network Mapping
* Close the developer tools
* Start `grunt`
* Turn on the Live Reload extension
* Refresh the page and open developer tools
* Edit CSS/JS to your hearts content

### Version History
* *0.0.5*
  * Sourcemap support for SASS. Ensure you have run `gem install sass --pre` and `npm install` after this update to get latest changes
  * Removed over eager version number updater. Run with `version:dev` or `version:prod` to update version instead
  * Instructions for ultimate workflow in readme.md
  * Editing the gruntfile rebuilds the project
* *0.0.4*
  * Initial release to Github

### Roadmap
* Add Common Styles
* Require JS
* Jasmine Testing
* Sitemap.xml using Assemble

### Issues and Feedback
Found an issue, have an idea? [github.com/andismith/site-boilerplate/issues](https://github.com/andismith/site-boilerplate/issues)