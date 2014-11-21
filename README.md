generic-test
=========

End to end testing automation script using jasmine-node and selenium-webriver.
Installation will get needed libraries for you in case you already have installed node package module (https://www.npmjs.org/).

## Installation
    $ npm install
    
## Running
    $ npm start
    or
    $ jasmine-node master.spec.js

## The way it works

You'll notice that there are two odd scripts - master.spec.js and definitions.spec.js. 

The first one is a generic test that run's contents on spec/ directory using selenium-webdriver's browser specification, in this case 'chrome'. You can change it to what suits you best. 

Second script is a serie of require('...`s in which you include your tests once they're written and added to spec/ (or other directory).

It's simple, primitive and it works. Enjoy.