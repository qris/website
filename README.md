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

* Fix HTML errors due to duplicate IDs in /updates/
* Fix redirections on the server side:

  ```
  redirects:
      /2013/06/14/welcome-to-appveyor-ci-beta: /blog/2013/06/14/welcome-to-appveyor-ci-beta
      /2013/07/08/appveyor-github-integration-and-build-process-improvements: /blog/2013/07/08/appveyor-github-integration-and-build-process-improvements
      /2013/09/25/appveyor-update-and-new-pricing: /blog/2013/09/25/appveyor-update-and-new-pricing
      /2013/10/01/appveyor-ci-overview-presentation: /blog/2013/10/01/appveyor-ci-overview-presentation
      /2014/02/19/appveyor-20-dedicated-build-vms-parallel-testing-nuget-deployment: /blog/2014/02/19/appveyor-20-dedicated-build-vms-parallel-testing-nuget-deployment
      /2014/02/21/nuget-support-in-appveyor-ci: /blog/2014/02/21/nuget-support-in-appveyor-ci
      /2014/02/23/converting-mercurial-repository-to-git-on-windows: /blog/2014/02/23/converting-mercurial-repository-to-git-on-windows
      /2014/03/18/about-nuget-package-restore: /blog/2014/03/18/about-nuget-package-restore
      /2014/03/25/continuous-delivery-of-windows-azure-cloud-services-with-appveyor-ci: /blog/2014/03/25/continuous-delivery-of-windows-azure-cloud-services-with-appveyor-ci
      /2014/03/26/appveyor-20-goes-live-with-a-new-pricing: /blog/2014/03/26/appveyor-20-goes-live-with-a-new-pricing
      /2014/03/31/web-deploy-parametrization-in-appveyor-ci: /blog/2014/03/31/web-deploy-parametrization-in-appveyor-ci
      /2014/04/23/build-worker-improvements: /blog/2014/04/23/build-worker-improvements
      /2014/06/04/shallow-clone-for-git-repositories: /blog/2014/06/04/shallow-clone-for-git-repositories
      /2014/07/23/appveyor-yml-and-multiple-branches: /blog/2014/07/23/appveyor-yml-and-multiple-branches
      /2014/11/06/appveyor-with-a-hint-of-chocolatey: /blog/2014/11/06/appveyor-with-a-hint-of-chocolatey
      /2014/11/13/appveyor-premium-build-environment-and-new-pricing: /blog/2014/11/13/appveyor-premium-build-environment-and-new-pricing
  ```
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
* ~~Automate 404 testing~~
* Move inline CSS to the respective files
