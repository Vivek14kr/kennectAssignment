//Closure

function outer() {
  let outerVar = "I'm an outer variable";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const closure = outer();
closure(); // Output: "I'm an outer variable"
