const affineCipherEncryptDecrypt = ( input, a1, b1, flag ) => {
  let output = '';
  let codeAscii = 0;
  const inputTextToArray = input.split('');
  let a = parseInt(a1);
  const b = parseInt(b1);
  ( flag ) ? a = a : a = gcdext( a, b ).prevx;
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
  return output;
}
