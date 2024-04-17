// Testing
// const eq = [ [2, 3], [3, 4], [1, 5] ]; // 11
// const eq = [ [2, 3], [3, 5], [2, 7] ]; // 23
// const eq = [ [3, 5], [2, 6], [4, 7] ]; // 368
const eq = [ [2, 3], [2, 4], [1, 5] ]; // 26

const mod = ( n, m ) => ((n % m) + m) % m;

const gcdext = ( a1, b1 ) => {
  const output = {
    prevx: 1,
    x: 0,
    prevy: 0,
    y: 1,
    tmp: 0
  };
  while ( b1 > 0 ) {
    const q = Math.floor(a1 / b1);
    output.tmp = output.x;
    output.x = output.prevx - q*output.x;
    output.prevx = output.tmp;

    output.tmp = output.y;
    output.y = output.prevy - q*output.y;
    output.prevy = output.tmp;

    output.tmp = a1;
    a1 = b1;
    b1 = mod( output.tmp, b1 );
    output.a = a1;
  }
  return output;
}

const crt = ( input ) => {
  let eqInput = {
    n: 0,
    residuo1: 0,
    residuo2: 0,
    mod1: 0,
    mod2: 0
  }
  for ( const i in input ) {
    if ( eqInput.residuo1 === 0 ) {
      eqInput.residuo1 = input[i][0];
      eqInput.mod1 = input[i][1];
    }
    if ( i > 0 && eqInput.residuo1 > 0 && eqInput.residuo2 === 0 ) {
      eqInput.residuo2 = input[i][0];
      eqInput.mod2 = input[i][1];
      const gcdextResult = gcdext( eqInput.mod1, eqInput.mod2 );
      console.log( `( gcd, x, y ) = ${gcdextResult.a}, ${gcdextResult.prevx}, ${gcdextResult.prevy}` );
      if ( gcdextResult.a === 1 ) {
        const x = gcdextResult.prevx;
        const y = gcdextResult.prevy;
        eqInput.n = eqInput.residuo1*y*eqInput.mod2 + eqInput.residuo2*x*eqInput.mod1;
        eqInput.residuo1 = eqInput.n;
        eqInput.mod1 = eqInput.mod1*eqInput.mod2;
        eqInput.residuo2 = 0;
        if ( eqInput.n < 0 ) {
          eqInput.n = mod( eqInput.n, eqInput.mod1 );
        }
      } else {
        console.log('Error. No son numero coprimos.');
        eqInput.n = 0;
        eqInput.mod1 = 0;
      }
    }
  }
  return eqInput;
}

const crtResult = crt(eq);
console.log( `El valor de n es: ${crtResult.n}, quedando la siguiente fórmula: ${crtResult.n} + ${crtResult.mod1}z con z E Z.` );
