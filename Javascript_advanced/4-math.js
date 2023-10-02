// Function to perform division
const divideBy = (firstNumber) => (secondNumber) => secondNumber / firstNumber;

// Function to perform addition
const addBy = (firstNumber) => (secondNumber) => firstNumber + secondNumber;

// Closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Execute
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
