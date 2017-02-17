/**
 * External dependencies
 */
const rw = require( 'rw' );
const test = require( 'tape' );

/**
 * Internal dependencies
 */
const reducer = require( './reducer' );

test( 'reducer works', t => {
	reducer( rw.readFileSync( __dirname + '/demo.csv', 'utf8' ), [ 'date' ], ( output ) => {
		t.equals( output, 'text/plain,56\ntext/html,48\ntext/rtf,11' );
		t.end();
	} );
} );
