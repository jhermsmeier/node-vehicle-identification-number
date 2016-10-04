var assert = require( 'assert' )
var util = require( 'util' )
var VIN = require( '..' )

function inspect( value ) {
  return util.inspect( value, {
    colors: true,
    depth: null,
  })
}

suite( 'VIN', function() {

  suite( 'Invalid VINs', function() {

    test( 'Illegal chars', function() {
      assert.throws( function() { new VIN( '1GISCJKC9FR264648' ) })
      assert.throws( function() { new VIN( '1GQSCJKC9FR264648' ) })
      assert.throws( function() { new VIN( '1GOSCJKC9FR264648' ) })
    })

    test( 'Wrong length', function() {
      assert.throws( function() { new VIN( '1GISCJKC9FR2646485' ) })
      assert.throws( function() { new VIN( '1GISCJKC9R264648' ) })
      assert.throws( function() { new VIN( '1GISCJKC9264648' ) })
      assert.throws( function() { new VIN( '' ) })
    })

  })

  test( 'US', function() {
    var vin = new VIN( '1GNSCJKC9FR264648' )
    assert.deepEqual( VIN.parse( '1GNSCJKC9FR264648' ), vin )
    console.log( inspect( vin ) )
    assert.equal( vin.toString(), '1GNSCJKC9FR264648' )
  })

  test( 'UK', function() {
    var vin = new VIN( 'WDD2120012B151334' )
    assert.deepEqual( VIN.parse( 'WDD2120012B151334' ), vin )
    console.log( inspect( vin ) )
    assert.equal( vin.toString(), 'WDD2120012B151334' )
  })

  test( 'Chinese Moped', function() {
    var vin = new VIN( 'LJCPCBLCX11000237' )
    assert.deepEqual( VIN.parse( 'LJCPCBLCX11000237' ), vin )
    console.log( inspect( vin ) )
    assert.equal( vin.toString(), 'LJCPCBLCX11000237' )
  })

  test( 'German Porsche 993 GT2', function() {
    var vin = new VIN( 'WP0ZZZ99ZTS392124' )
    assert.deepEqual( VIN.parse( 'WP0ZZZ99ZTS392124' ), vin )
    console.log( inspect( vin ) )
    assert.equal( vin.toString(), 'WP0ZZZ99ZTS392124' )
  })

  test( '???', function() {
    var vin = new VIN( 'SB164ABN10E082986' )
    assert.deepEqual( VIN.parse( 'SB164ABN10E082986' ), vin )
    console.log( inspect( vin ) )
    assert.equal( vin.toString(), 'SB164ABN10E082986' )
  })

})
