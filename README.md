# Proof of Concept: Libsass vs Ruby Sass

Short test case to decide if we should switch to Libsass in upcoming projects for De Persgroep.

## Test case

Imported the entire [Foundation](http://foundation.zurb.com/) Sass library. It contains enough `@import`'s and complex SassScripting to test and evaluate our case

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`

## Quickstart

Run local dev site: `grunt`

Note: change `http-server.dev.root` in `Gruntfile.js` to your `PATH`

In a new Terminal window, Libsass : `grunt libsass`

In another Terminal window, Ruby Sass: `grunt rubysass`

Now change something in the `.scss` files and compare compile times.
Should be something like ~10s for Ruby Sass and ~0.6s for Libsass (tested on a Macbook Pro Retina OSX 10.10)


