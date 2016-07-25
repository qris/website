# [www.appveyor.com](https://www.appveyor.com/) website

## Getting started

[![Windows Build status](https://img.shields.io/appveyor/ci/AppVeyor-Website/website/staging.svg?label=Windows%20build)](https://ci.appveyor.com/project/AppVeyor-Website/website/branch/staging)
[![devDependency Status](https://img.shields.io/david/appveyor/website.svg)](https://david-dm.org/appveyor/website)

* Install [Node.js](https://nodejs.org/download/)
* Install grunt: `npm install -g grunt-cli`
* Install the Node.js dependencies via npm: `npm install`
* Install Ruby and Ruby DevKit; make sure you select add Ruby to `PATH`, and then run:

    ```shell
    cd C:\RubyDevKit
    ruby dk.rb init
    ruby dk.rb install
    ```

* Run `gem install bundle` and then `bundle install`
* Run `grunt build` to build the static site, `grunt` to build and watch for changes (`http://localhost:4000/`)

## Staging

The `staging` branch is published to <https://appveyor-staging.azurewebsites.net>.

### TODO:

* Fix pagination for /updates/
* Fix HTML errors
* Fix redirections
* ~~Fix Twitter testimonials~~
* ~~Fix pagination for /updates/~~
* ~~Remove excessive indentation from code blocks and specify the language to use in highlighting in more places~~
* ~~Add sitemap and feed.xml~~
* ~~Minify everything (HTML, CSS, JS)~~
* ~~Load JS asynchronously~~
* ~~Update JS assets to latest versions~~
* ~~Optimize and clean up images~~

Non-blocking TODO:

* ~~Rename/reorganize CSS/JS folder structure; no need for 1-2-3 etc filenames anymore~~
* Automate 404 testing
* Move inline CSS to the respective files
