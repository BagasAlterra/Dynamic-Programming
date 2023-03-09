function maxDivideConquer(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  console.log("mid : ", mid);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  console.log("left array : ", leftArr);
  console.log("right array : ", rightArr);

  const leftMax = maxDivideConquer(leftArr);
  const rightMax = maxDivideConquer(rightArr);
  console.log("left max : ", leftMax);
  console.log("right max : ", rightMax);

  return Math.max(leftMax, rightMax);
}

const arrNumber = [5, 3, 7, 1, 8, 4, 2];
console.log(maxDivideConquer(arrNumber));
