/*
 * grunt-asset-inliner
 * https://github.com/jasonbellamy/grunt-asset-inliner
 *
 * Copyright (c) 2014 Jason Bellamy
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function( grunt ) {

  var AssetInliner = require( "asset-inliner" );

  grunt.registerMultiTask( "inliner", "Grunt plugin that parses your markup and replaces the references to external assets with inline code.", function () {
    var assetInliner = new AssetInliner( this.options( { manual: false } ) );

    this.files.forEach( function( file ) {
      var src = file.src.map( function( filePath ) {
        if ( !grunt.file.exists( filePath ) ) {
          grunt.log.warn( "Source file " + filePath + " not found." );
          return false;
        }
        return filePath;
      });

      assetInliner.process( src[ 0 ], function( error, markup ) {
        if ( error ) {
          grunt.log.warn( error );
          return false;
        }

        grunt.file.write( file.dest, markup );
        grunt.log.writeln( "File " + file.dest + " created." );
      });
    });
  });
};
