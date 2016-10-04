function transliterate( c ) {
  return transliterate.map.indexOf( c ) % 10
}

transliterate.map = '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'

function checksum( value ) {

  var sum = 0

  for( var i = 0; i < 17; i++ ) {
    sum += transliterate( value[i] ) *
      checksum.map.indexOf( checksum.weights[i] )
  }

  return checksum.map[ sum % 11 ]

}

checksum.map = '0123456789X'
checksum.weights = '8765432X098765432'

module.exports = checksum
