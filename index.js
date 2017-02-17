#!/usr/bin/env node

/**
 * External dependencies
 */
const rw = require( 'rw' );

/**
 * Internal dependencies
 */
const reducer = require( './reducer' );

const writeToOutput = ( output ) => {
	process.stdout.write( output );
};

const getInputString = () => {
	if ( ! process.stdin.isTTY ) {
		// cat demo.csv | ./index.js
		return rw.readFileSync( '/dev/stdin', 'utf8' );
	}
	// ./index.js inputFile
	return rw.readFileSync( __dirname + '/' + process.argv[ 2 ], 'utf8' );
};

reducer( getInputString(), [ 'date' ], writeToOutput );
