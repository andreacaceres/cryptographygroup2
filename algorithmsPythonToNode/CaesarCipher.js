const modulo = 26;
const mayus_ASCII = 65;
const minus_ASCII = 97;
const flag = {
  encrypt: 1,
  decrypt: 0
}

// TESTING for encrypt
const plainText = 'THE LEGEND OF ZELDA';
const shift = 3;

// TESTING for decrypt
const cipherText = 'WKH OHJHQG RI CHOGD';

const mod = (n, m) => {
  return ((n % m) + m) % m;
}

const letterShift = ( asciiLetterCode, s, f ) => {
  return ( f ) ? asciiLetterCode + s : asciiLetterCode - s;
}

const caesar_algorithm = ( input, s, flag ) => {
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
    const asciiCodeShift = ( letterShift( letter.charCodeAt(0), s, flag) - codeAscii );
    const asciiCodeShiftMod = ( asciiCodeShift > 0 ) ? asciiCodeShift % modulo + codeAscii : mod( asciiCodeShift, modulo ) + codeAscii;
    const asciiToLetter = String.fromCharCode( asciiCodeShiftMod );
    output = output + asciiToLetter;
  }
  return output;
}

const breakingCaesarCipher = ( cipher ) => {
  const arrayShift = Array(26).fill(1).map((n, i) => n + i);
  for ( const i in arrayShift ) {
    const getCipherText = caesar_algorithm(cipher, i, flag.decrypt);
    console.log(`Shift: ${i} -> ${getCipherText}`);
  }
}

const plainTextResult = caesar_algorithm(plainText, shift, flag.encrypt);
console.log(`The plaint text: ${plainText} encrypted is ${plainTextResult}`);
const cipherTextResult = caesar_algorithm(cipherText, shift, flag.decrypt);
console.log(`The cipher text: ${cipherText} decrypted is ${cipherTextResult}`);
breakingCaesarCipher( cipherText );
