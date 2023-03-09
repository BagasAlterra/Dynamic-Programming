const memo: { [key: number]: number } = {};

function fiboTopDown(n: number): number {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  const result = fiboTopDown(n - 1) + fiboTopDown(n - 2);
  console.log("result : ", result);
  memo[n] = result;
  console.log("memo : ", memo[n]);

  return result;
}

// console.log(fiboTopDown(10));
console.log(fiboTopDown(6));
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
