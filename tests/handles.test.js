const LambdaTester = require( 'lambda-tester' );
 
const myHandler = require( '../lib' ).handler;
 
describe( 'handler', function() {
 
    it( 'test success', async function() {
 
        await LambdaTester( myHandler )
            .event( { name: 'Fred' } )
            .expectResult();
    });
});