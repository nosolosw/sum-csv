const d3dsv = require( 'd3-dsv' );
const d3array = require( 'd3-array' );

module.exports = ( inputString, columnsToIgnore = [], callback ) => {
	const ignoreColumns = ( row ) => ! columnsToIgnore.includes( row[ 0 ] );

	const count = ( a, b ) => +a + +b;
	const makeCount = ( row ) => [ row[ 0 ], row.slice( 1 ).reduce( count ) ];

	const rows = d3dsv.csvParseRows( inputString );
	const results = d3array.transpose( rows ).filter( ignoreColumns ).map( makeCount );

	callback( d3dsv.csvFormatRows( results ) );
};
