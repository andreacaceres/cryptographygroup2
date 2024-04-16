const a = 7;
const b = 26;
const plainText = 'MASSEFFECT';
const cipherText = 'GAWWCJJCOD';
const modulo = 26;
const mayus_ASCII = 65;
const minus_ASCII = 97;
const flag = {
  encrypt: 1,
  decrypt: 0
}

const mod = ( n, m ) => {
  return ((n % m) + m) % m;
}

const gcdext = ( a1, b1 ) => {
  const output = {
    prevx: 1,
    x: 0,
    prevy: 0,
    y: 1,
    tmp: 0
  };
  let q;
  while ( b1 > 0 ) {
    q = Math.floor( a1/b1 );
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

const gcdextOutput = gcdext( a, b );
console.log( `( gcd, x, y ) = ${gcdextOutput.a}, ${gcdextOutput.prevx}, ${gcdextOutput.prevy}` );
const cipherTextResult = affineCipherEncryptDecrypt( plainText, a, b, flag.decrypt );
console.log( cipherTextResult );
const plainTextResult = affineCipherEncryptDecrypt ( cipherText, gcdextOutput.prevx, b, flag.encrypt );
console.log( plainTextResult );
