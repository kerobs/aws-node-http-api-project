"use strict";

const LambdaTester = require('lambda-tester' );
 
const myHandler = require('./index').handler;

describe( 'My Handler Tests', function() {
    it( 'should_return_success', async function() {
        await LambdaTester( myHandler )
            .event( { name: 'Fred' } )
            .expectResult();
    });

    it( 'should_return_Resolve', async function() {
        await LambdaTester( myHandler )
            .event({ name: 'Unknown' })
            .expectResolve();
    });
});