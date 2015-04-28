#! /usr/local/bin/node

var program  = require( 'commander' );
var util     = require( 'util' );
var chalk    = require( 'chalk' );
var elements = require( './resources/elements' );
var _        = require( 'lodash' );
var output   = [];
var input;

// Parse the input via commander
program.parse( process.argv );

// Join the arguments into a sentence
input = program.args.slice().join(' ');

if ( !input ) {
  return;
}

_.forEach( input.split( ' ' ), function( word ) {
  var breakingBadWord = matchAndReplaceWord( word );
  output.push( breakingBadWord );
});

console.log( output.join( ' ' ) );


// Helpers
function matchAndReplaceWord( word ) {
  var isMatched    = false
  var highestMatch = 0;
  var returnWord;

  _.each( elements, function( obj, key ) {
    if ( isMatched && highestMatch >= key.length )
      return;

    if ( word.match( key ) ) {
      isMatched = true;
      highestMatch = key.length;
      returnWord = word.replace( key, chalk.underline.green( obj.symbol ) );
    }

  });

  if ( !returnWord ) {
    return word;
  }

  return returnWord;
}
