//Recursion

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); 
// Output: 120 (5 x 4 x 3 x 2 x 1)
