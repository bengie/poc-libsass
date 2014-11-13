# Proof of Concept: Libsass vs Ruby Sass

Short test case to decide if we should switch to Libsass in upcoming projects for De Persgroep.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`

## Quickstart

Run local dev site: `grunt`
Note: change `http-server.dev.root` in `Gruntfile.js` to your `PATH`

Libsass : `grunt libsass`

Ruby Sass: `grunt rubysass`

Now change something in the `.scss` files and compare compile times.
Should be something like ~10s for Ruby Sass and ~0.6s for Libsass


