/**
 * External dependencies
 */
const rw = require( 'rw' );
const test = require( 'tape' );

/**
 * Internal dependencies
 */
const counter = require( './counter' );

test( 'counter works', t => {
	counter( rw.readFileSync( __dirname + '/demo.csv', 'utf8' ), [ 'date' ], ( output ) => {
		t.equals( output, '56,text/plain\n48,text/html\n11,text/rtf' );
		t.end();
	} );
} );
