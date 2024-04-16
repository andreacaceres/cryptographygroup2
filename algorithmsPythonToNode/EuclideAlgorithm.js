const a = 1849639579327;
const b = 790933790547;

const gcdr = ( a1, b1 ) => {
  if ( a1 > 0 && b1 >= 0 && a1 + b1 > 0 ) {
    while ( b1 > 0 ) {
      return gcdr( b1, a1 % b1 );
    }
  }
  return a1;
}

const gcddiff = ( a1, b1 ) => {
  if ( a1 > 0 && b1 >= 0 && a1 + b1 > 0 ) {
    while ( a1 > 0 && b1 > 0 ) {
      ( a1 >= b1 ) ? a1 = a1 - b1 : b1 = b1 - a1;
    }
  }
  return Math.max( a1, b1 );
}

const lcm = ( a1, b1 ) => {
  return ( a1*b1 ) / gcdr( a1, b1 );
}

let start = performance.now();
const gcdrOutput = gcdr( a, b );
let end = performance.now();
console.log( `El gcd( ${a}, ${b} ) = ${gcdrOutput} y se ejecuto en: ${end - start} ms.` );

start = performance.now();
const gdcdiffOutput  = gcddiff( a, b );
end = performance.now();
console.log( `El gcddiff( ${a}, ${b} ) = ${gdcdiffOutput} y se ejecuto en: ${end - start} ms.` );

const lcmOutput = lcm( a, b );
console.log(`Por lo tanto, el lcm( ${a}, ${b} ) = ${lcmOutput}`);
console.log("test milton");
