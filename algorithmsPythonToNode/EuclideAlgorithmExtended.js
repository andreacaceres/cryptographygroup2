const gcdext = ( a1, b1 ) => {
  const output = {
    prevx: 1,
    x: 0,
    prevy: 0,
    y: 1,
    tmp: 0
  };
  while ( b1 > 0 ) {
    const q = Math.floor( a1/b1 );
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
  return output.prevx;
}
