"use strict";

var grunt = require( "grunt" );

exports.asset_inliner = {

  singleAuto: function( test ) {
    test.expect(1);
    var actual   = grunt.file.read( "tmp/single/auto.html" );
    var expected = grunt.file.read( "test/expected/auto.html" );
    test.equal(actual, expected, "should automatically inline a single files contents." );

    test.done();
  },

  singleManual: function( test ) {
    test.expect(1);
    var actual   = grunt.file.read( "tmp/single/manual.html" );
    var expected = grunt.file.read( "test/expected/manual.html" );
    test.equal(actual, expected, "should manually inline a single files contents." );


    test.done();
  },

  multiAuto: function( test ) {
    var files = [
      "auto.html",
      "auto_two.html"
    ];

    test.expect( files.length );

    files.forEach( function( file ) {
      var actual   = grunt.file.read( "tmp/multi/auto/" + file );
      var expected = grunt.file.read( "test/expected/" + file );
      test.equal(actual, expected, "should automatically inline multiple files contents." );
    });

    test.done();
  },

  multiManual: function( test ) {
    var files = [
      "manual.html",
      "manual_two.html"
    ];

    test.expect( files.length );

    files.forEach( function( file ) {
      var actual   = grunt.file.read( "tmp/multi/manual/" + file );
      var expected = grunt.file.read( "test/expected/" + file );
      test.equal(actual, expected, "should manually inline multiple files contents." );
    });

    test.done();
  }
};
