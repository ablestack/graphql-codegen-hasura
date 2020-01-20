#Dev Notes
Just some dev things I may forget unless I write them down. Not really for general consumption.

## NPM

Despite Yarn being (in my experience) more straight forward and stable than NPM, the codebase has been switched back to NPM. This is primarily because Lerna seems to work better with NPM. Also, npm supports the "prepublishOnly" script, which we make use of.

## Build Steps

- Prepublish script used to move key files (package.json) to the dist/src directory before publish
