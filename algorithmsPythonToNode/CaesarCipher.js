/**
 * Aplica el algoritmo César para encriptar o desencriptar un texto.
 * @param {string} input - El texto a encriptar o desencriptar.
 * @param {number|string} s - El número de posiciones para desplazar el alfabeto,también conocido como SHIFT.
 * @param {boolean} flag - Verdadero para encriptar, falso para desencriptar.
 * @returns {string} El texto encriptado o desencriptado.
 */
const caesar_algorithm = ( input, s, flag ) => {
  let start = performance.now();
  let output = '';
  let codeAscii = 0;
  const shift = parseInt(s);
  const inputTextToArray = input.split('');
  for ( const i in inputTextToArray ) {
    let letter = inputTextToArray[i];
    if ( letter === ' ' ) {
      output = output + letter;
      continue;
    }
    ( letter === letter.toUpperCase() ) ? codeAscii = mayus_ASCII : codeAscii = minus_ASCII;
    const asciiCodeShift = ( letterShift( letter.charCodeAt(0), shift, flag) - codeAscii );
    const asciiCodeShiftMod = ( asciiCodeShift > 0 ) ? asciiCodeShift % modulo + codeAscii : mod( asciiCodeShift, modulo ) + codeAscii;
    const asciiToLetter = String.fromCharCode( asciiCodeShiftMod );
    output = output + asciiToLetter;
  }
  let end = performance.now();
  console.log( `La función affineCipherEncryptDecrypt se ejecuto en: ${end - start} ms.` );
  return output;
}
