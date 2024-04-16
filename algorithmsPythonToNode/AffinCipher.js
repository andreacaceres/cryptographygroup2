
const plainText = 'MASSEFFECT';
const cipherText = 'SMIIOVVOAP';
const a = 7;
const b = 12;
const modulo = 26;
const mayus_ASCII = 65;
const minus_ASCII = 97;

const mod = (n, m) => {
  return ((n % m) + m) % m;
}

const getInverseMultipleOf = ( a ) => {
  let result = 0;
  const arrayNegativeNumbers = Array(100).fill(1).map((n, i) => (n + i) * -1);
  for ( const i in arrayNegativeNumbers ) {
    let number = arrayNegativeNumbers[i];
    let m = a*number;
    let r = mod( m, modulo );
    if ( r === 1 ) {
      result = number;
      break;
    }
  }
  return result;
}

const letterShift = ( asciiLetterCode, a, s, f ) => {
  return ( f ) ? ( a*asciiLetterCode ) + s : ( asciiLetterCode - s )*a;
}

const affineCipherEncryptDecrypt = ( input, a1, b1, flag ) => {
  let output = '';
  let codeAscii = 0;
  const inputTextToArray = input.split('');
  for ( const i in inputTextToArray ) {
    let letter = inputTextToArray[i];
    if ( letter === ' ' ) {
      output = output + letter;
      continue;
    }
    ( letter === letter.toUpperCase() ) ? codeAscii = mayus_ASCII : codeAscii = minus_ASCII;
    const asciiCodeShift = ( letterShift( letter.charCodeAt(0), a1, b1, flag ) - codeAscii );
    const asciiCodeShiftMod = ( asciiCodeShift > 0 ) ? asciiCodeShift % modulo + codeAscii : mod( asciiCodeShift, modulo ) + codeAscii;
    const asciiToLetter = String.fromCharCode( asciiCodeShiftMod );
    output = output + asciiToLetter;
  }
  return output;
}

const cipherTextResult = affineCipherEncryptDecrypt( plainText, a, b, 1 );
console.log( cipherTextResult );
const a_inv = getInverseMultipleOf( a );
const plainTextResult = affineCipherEncryptDecrypt ( cipherText, a_inv, b, 0 );
console.log( plainTextResult );
