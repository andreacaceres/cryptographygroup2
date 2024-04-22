/**
 * Encripta o desencripta un texto utilizando el cifrado afín.
 * @param {string} input - El texto a encriptar o desencriptar.
 * @param {number|string} a1 - La primera clave del cifrado afín.
 * @param {number|string} b1 - La segunda clave del cifrado afín.
 * @param {boolean} flag - Verdadero para encriptar, falso para desencriptar.
 * @returns {string} El texto encriptado o desencriptado.
 */
const N = 26;
const affineCipherEncryptDecrypt = ( input, a1, b1, flag ) => {
  let start = performance.now();
  let output = '';
  let codeAscii = 0;
  const inputTextToArray = input.split('');
  let a = parseInt(a1);
  const b = parseInt(b1);
  ( flag ) ? a = a : a = mod(gcdext( a, N ).prevx, N);
  console.log( `encrypt/decrypt: ${flag} - a: ${a} - b: ${b}` );
  for ( const i in inputTextToArray ) {
    let letter = inputTextToArray[i];
    if ( letter === ' ' ) {
      output = output + letter;
      continue;
    }    
    ( letter === letter.toUpperCase() ) ? codeAscii = mayus_ASCII : codeAscii = minus_ASCII;
    const asciiCodeShift = ( letterShift( letter.charCodeAt(0), b, flag, a ) - codeAscii );
    const asciiCodeShiftMod = ( asciiCodeShift > 0 ) ? asciiCodeShift % modulo + codeAscii : mod( asciiCodeShift, modulo ) + codeAscii;
    const asciiToLetter = String.fromCharCode( asciiCodeShiftMod );
    output = output + asciiToLetter;
  }
  console.log(`Output: ${output}`);
  let end = performance.now();
  console.log( `La función affineCipherEncryptDecrypt se ejecuto en: ${end - start} ms.` );
  return output;
}
