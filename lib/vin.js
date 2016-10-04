/**
 * VIN
 * @return {VIN}
 */
function VIN( value ) {

  if( !(this instanceof VIN) ) {
    return new VIN( value )
  }

  this.region = null
  this.country = null
  this.assemblyPlant = null
  this.checksum = null
  this.modelYear = null
  this.serialNumber = null

  // World Manufacturer Identifier
  this.wmi = null
  // Vehicle Descriptor Section
  this.vds = null
  // Vehicle Identifier Section
  this.vis = null

  if( value != null ) {
    this.parse( value )
  }

}

VIN.countries = require( './countries' )

VIN.normalize = function( value ) {
  return value.toUpperCase()
    .replace( /[^A-Z0-9]/g, '' )
}

VIN.parse = function( value ) {
  return new VIN().parse( value )
}

VIN.calculateChecksum = require( './check' )

VIN.getChecksum = function( value ) {
  // NOTE: Checksums aren't used in Europe (see ISO 3779 / ISO 3780)
  return VIN.getRegion( value ) !== 'EU' ? value[8] : null
}

VIN.hasValidChecksum = function( value ) {
  return VIN.getChecksum( value ) == null ||
    VIN.calculateChecksum( value ) === value[8]
}

VIN.isValid = function( value ) {
  value = VIN.normalize( value )
  return value.length === 17 &&
    /[^IOQ]/i.test( value ) &&
    VIN.hasValidChecksum( value )
}

VIN.getRegion = function( value ) {
  if( /[A-H]/.test( value[0] ) )
    return 'AF' // Africa
  if( /[J-R]/.test( value[0] ) )
    return 'AS' // Asia
  if( /[S-Z]/.test( value[0] ) )
    return 'EU' // Europe
  if( /[1-5]/.test( value[0] ) )
    return 'NA' // North America
  if( /[6-7]/.test( value[0] ) )
    return 'OC' // Oceania
  if( /[8-9]/.test( value[0] ) )
    return 'SA' // South America
  // AN - Antarctica
}

VIN.getCountry = function( value ) {

  var codes = Object.keys( VIN.countries )

  for( var i = 0; i < codes.length; i++ ) {
    if( VIN.countries[ codes[i] ].test( value ) )
      return codes[i]
  }

  return null

}

/**
 * VIN prototype
 * @type {Object}
 */
VIN.prototype = {

  constructor: VIN,

  isValid: function() {
    return VIN.isValid( this.toString() )
  },

  parse: function( value, noassert ) {

    value = VIN.normalize( value )

    if( !noassert && value.length !== 17 ) {
      throw new SyntaxError(
        'Invalid VIN: Expected length to be 17, found ' + value.length
      )
    }

    if( !noassert && /[IOQ]/i.test( value ) ) {
      throw new SyntaxError(
        'Invalid VIN: Illegal character ' + /[IOQ]/i.exec( value )[0]
      )
    }

    if( !noassert && !VIN.hasValidChecksum( value ) ) {
      throw new SyntaxError(
        'Invalid VIN: Checksum "' + value[8] + '" does not match calculated "' + VIN.getChecksum( value ) + '"'
      )
    }

    this.wmi = value.substring(0,3)
    this.checksum = VIN.getChecksum( value )
    this.modelYear = value[9]
    this.assemblyPlant = value[10]
    this.region = VIN.getRegion( value )
    this.country = VIN.getCountry( value )
    this.serialNumber = value.substring(12)
    this.vds = value.substring(3,9)
    this.vis = value.substring(9)

    return this

  },

  toString: function() {
    return this.wmi + this.vds + this.vis
  },

}

// Exports
module.exports = VIN
