function isPrime(x) {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function findNextPrime(x) {
  let next = x + 1;
  while (!isPrime(next)) {
    next++;
  }
  return next;
}

function findDifference(x) {
  return findNextPrime(x) - x;
}

console.log(findDifference(3)); // Output: 2
console.log(findDifference(4)); // Output: 3
