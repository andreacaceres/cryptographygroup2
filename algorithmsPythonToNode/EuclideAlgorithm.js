const a = 105;
const b = 30;

const gcdr = ( a1, b1 ) => {
  if ( a1 > 0 && b1 >= 0 && a1 + b1 > 0 ) {
    while ( b1 > 0 ) {
      return gcdr( b1, a1 % b1 );
    }
  }
  return a1;
}

const lcm = ( a1, b1 ) => {
  return ( a1*b1 ) / gcdr( a1, b1 );
}

const gcdrOutput = gcdr( a, b );
console.log( `El gcd( ${a}, ${b} ) = ${gcdrOutput}` );
const lcmOutput = lcm( a, b );
console.log(`Por lo tanto, el lcm( ${a}, ${b} ) = ${lcmOutput}`);
