function fiboBottomUp(n: number): number {
  if (n <= 1) {
    return n;
  }

  const memo: number[] = [0, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

console.log(fiboBottomUp(6));
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
