function crt(num, rem) {
  let sum = 0;
  const prod = num.reduce((a, c) => a * c, 1);
  for (let i = 0; i < num.length; i++) {
    const [ni, ri] = [num[i], rem[i]];
    const p = Math.floor(prod / ni);
    sum += ri * p * mulInv(p, ni);
  }
  return sum % prod;
}

function mulInv(a, b) {
  const b0 = b;
  let [x0, x1] = [0, 1];

  if (b === 1) {
    return 1;
  }
  while (a > 1) {
    const q = Math.floor(a / b);
    [a, b] = [b, a % b];
    [x0, x1] = [x1 - q * x0, x0];
  }
  if (x1 < 0) {
    x1 += b0;
  }
  // console.log(`Inverso es: ${x1}`);
  return x1;
}

// console.log( `n value is: ${crt([3,4,5], [2,3,1])}` ); // 11
// n = 11 + 12z con z E Z.
// ( gcd, x, y ) = 1, -1, 1

// console.log( `n value is: ${crt([3,5,7], [2,3,2])}` ); // 23
// n = 23 + 105z con z E Z.
// ( gcd, x, y ) = 1, 2, -1
// ( gcd, x, y ) = 1, 1, -2

// console.log( `n value is: ${crt([5,6,7], [3,2,4])}` ); // 158
// n = 368 + 210z con z E Z.
// ( gcd, x, y ) = 1, -1, 1
// ( gcd, x, y ) = 1, -3, 13

// console.log( `n value is: ${crt([3,4,5], [2,2,1])}` ); // 26
// n = 26 + 60z con z E Z.
// ( gcd, x, y ) = 1, -1, 1
// ( gcd, x, y ) = 1, -2, 5

// console.log( `n value is: ${crt([6,7,11], [2,2,4])}` ); // 422
// n = 422 + 462z con z E Z.

// console.log( `n value is: ${crt([5,7,11], [2,1,4])}` ); // 92
// n = 92 + 385z con z E Z.