
const modulo = 26;
const mayus_ASCII = 65;
const minus_ASCII = 97;

/**
 * Calcula el residuo de la división de dos números enteros de forma positiva.
 * @param {number} n - El dividendo.
 * @param {number} m - El divisor.
 * @returns {number} El residuo de la división 'n' % 'm', asegurando que sea un número positivo.
 */
const mod = ( n, m ) => ((n % m) + m) % m;

/**
 * Desplaza el código ASCII de una letra en función de los parámetros proporcionados.
 * @param {number} asciiLetterCode - El código ASCII de la letra.
 * @param {number} s - El valor de desplazamiento, también conocido como SHIFT.
 * @param {boolean} f - Bandera para determinar si tiene que sumar (encriptar) o restar (desencriptar).
 * @param {number} [a=0] - Opcional. Valor de desplazamiento para el algortimo affin cipher.
 * @returns {number} El código ASCII resultante después del desplazamiento.
 */
const letterShift = ( asciiLetterCode, s, f, a = 0 ) => {
  if ( a ) {
    return ( f ) ? ( a*asciiLetterCode ) + s : ( asciiLetterCode - s )*a;
  }
  return ( f ) ? asciiLetterCode + s : asciiLetterCode - s;
}

/**
 * Calcula el máximo común divisor (GDC) extendido de dos números enteros utilizando el algoritmo extendido de Euclides.
 * @param {number|string} a1 - El primer número entero.
 * @param {number|string} b1 - El segundo número entero.
 * @returns {object} Un objeto que contiene los coeficientes previos y actuales de 'x' y 'y' en la ecuación diofántica, 
 * junto con el máximo común divisor.
 */
const gcdext = ( a1, b1 ) => {
  const output = {
    prevx: 1,
    x: 0,
    prevy: 0,
    y: 1
  };
  a1 = parseInt(a1);
  b1 = parseInt(b1);
  let tmp;
  while ( b1 > 0 ) {
    const q = Math.floor( a1/b1 );
    tmp = output.x;
    output.x = output.prevx - q*output.x;
    output.prevx = tmp;

    tmp = output.y;
    output.y = output.prevy - q*output.y;
    output.prevy = tmp;

    tmp = a1;
    a1 = b1;
    b1 = mod( tmp, b1 );
    output.a = a1;
  }
  return output;
}
