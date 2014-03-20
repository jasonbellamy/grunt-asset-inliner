# grunt-asset-inliner [![Build Status](https://travis-ci.org/jasonbellamy/grunt-asset-inliner.png?branch=master)](https://travis-ci.org/jasonbellamy/grunt-asset-inliner)

> Grunt plugin that parses your markup and replaces references to external assets with inline code.


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-asset-inliner --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks( "grunt-asset-inliner" );
```


## Inliner task

*Run this task with the `grunt inliner` command.*  
Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.  
Assets are inlined with [asset-inliner](https://github.com/jasonbellamy/asset-inliner).


## Usage

### Inline the assets from a single file.

```javascript
inliner: {
  single: {
    files: {
      "path/to/output.html", [ "path/to/input.html" ]
    }
  }
}
```

### Inline the assets from all the files in a directory.

```javascript
inliner: {
  multi: {
    files: [
      {
        expand: true,
        cwd: "input/directory",
        src: [ "*.html" ],
        dest: "ouput/directory"
      }
    ]
  }
}
```


## Options

Name   | Type      | Argument     | Default | Description
-------|-----------|--------------|---------|------------
manual | `boolean` | `<optional>` | `false` | Manually define the assets that should be inlined by appending `data-inline="true"` to an elements(s) markup.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2014 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
