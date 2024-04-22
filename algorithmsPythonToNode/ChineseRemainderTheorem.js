/**
 * Resuelve un sistema de congruencias utilizando el Teorema del Residuo Chino (TRC).
 * @param {Array<Array<number|string>>} input - Un array de arrays que representan las congruencias en el formato [residuo1, módulo1],.., [residuoN, móduloN].
 * @returns {object} Un objeto que contiene la solución del sistema de congruencias.
 */
const crt = ( input ) => {
  let start = performance.now();
  let eqInput = {
    n: 0,
    residuo1: 0,
    residuo2: 0,
    mod1: 0,
    mod2: 0
  }
  for ( const i in input ) {
    if ( eqInput.residuo1 === 0 ) {
      eqInput.residuo1 = parseInt(input[i][0]);
      eqInput.mod1 = parseInt(input[i][1]);
    }
    if ( i > 0 && eqInput.residuo1 > 0 && eqInput.residuo2 === 0 ) {
      eqInput.residuo2 = parseInt(input[i][0]);
      eqInput.mod2 = parseInt(input[i][1]);
      const gcdextResult = gcdext( eqInput.mod1, eqInput.mod2 );
      console.log( `( gcd, x, y ) = ${gcdextResult.a}, ${gcdextResult.prevx}, ${gcdextResult.prevy}` );
      if ( gcdextResult.a === 1 ) {
        const x = gcdextResult.prevx;
        const y = gcdextResult.prevy;
        eqInput.n = mod(eqInput.residuo1*y*eqInput.mod2 + eqInput.residuo2*x*eqInput.mod1, eqInput.mod1 * eqInput.mod2);
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
        break;
      }
    }
  }
  let end = performance.now();
  console.log( `La función crt se ejecuto en: ${end - start} ms.` );
  return eqInput;
}
