
const modulo = 26;
const mayus_ASCII = 65;
const minus_ASCII = 97;

const mod = ( n, m ) => ((n % m) + m) % m;

const letterShift = ( asciiLetterCode, s, f ) => {
    return ( f ) ? asciiLetterCode + s : asciiLetterCode - s;
  }