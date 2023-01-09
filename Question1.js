// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Continue statement
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); 
  // Output: 1, 3, 5, 7, 9
}

// If-else statement
const x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}

// Switch statement
const color = "red";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is neither red nor blue");
}
