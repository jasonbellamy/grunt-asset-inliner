/*
 * grunt-asset-inliner
 * https://github.com/jasonbellamy/grunt-asset-inliner
 *
 * Copyright (c) 2014 Jason Bellamy
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function( grunt ) {

  grunt.initConfig({
    clean: {
      tests: [ "tmp" ],
    },

    inliner: {
      singleAuto: {
        options: {
          manual: false
        },
        files: { "tmp/single/auto.html": [ "test/fixtures/auto.html" ] }
      },

      singleManual: {
        options: {
          manual: true
        },
        files: { "tmp/single/manual.html": [ "test/fixtures/manual.html" ] }
      },

      multiAuto: {
        options: {
          manual: false
        },
        files: [
          { expand: true, cwd: "test/fixtures", src: [ "*.html" ], dest: "tmp/multi/auto" }
        ],
      },

      multiManual: {
        options: {
          manual: true
        },
        files: [
          { expand: true, cwd: "test/fixtures", src: [ "*.html" ], dest: "tmp/multi/manual" }
        ],
      }

    },

    nodeunit: {
      tests: [ "test/*_test.js" ],
    },
  });

  grunt.loadTasks( "tasks" );
  grunt.loadNpmTasks( "grunt-contrib-clean" );
  grunt.loadNpmTasks( "grunt-contrib-nodeunit" );

  grunt.registerTask( "test", [ "clean", "inliner", "nodeunit" ] );
  grunt.registerTask( "default", [ "test" ] );
};
