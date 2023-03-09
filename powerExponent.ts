function powerExponent(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  const half = powerExponent(base, Math.floor(exponent / 2));
  console.log("half : ", half);
  console.log("exponent dibagi 2 : ", Math.floor(exponent / 2));

  if (exponent % 2 === 0) {
    console.log("jika pangkat genap : ", half * half);
    return half * half;
  } else {
    console.log("jika pangkat ganjil : ", base * half * half);
    return base * half * half;
  }
}

// console.log(powerExponent(2, 4));
console.log(powerExponent(3, 2));
