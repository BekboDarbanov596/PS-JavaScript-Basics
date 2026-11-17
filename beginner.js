// Section 1: Variables and data types

// 1. Variable declaration
const userName = 'Alex';
const userAge = 20;
const isStudent = true;
console.log('1.', userName, userAge, isStudent);

// 2. String concatenation
const firstName = 'Alex';
const lastName = 'Kim';
const fullName = firstName + ' ' + lastName;
console.log('2.', fullName);

// 3. Basic arithmetic
const num1 = 10;
const num2 = 5;
console.log('3. Sum:', num1 + num2);
console.log('   Difference:', num1 - num2);
console.log('   Product:', num1 * num2);
console.log('   Quotient:', num1 / num2);

// 4. Type check
const testValue = 42;
console.log('4.', typeof testValue);

// Section 2: Conditional statements

// 5. Even or odd
const checkNumber = 17;
if (checkNumber % 2 === 0) {
  console.log('5. Even');
} else {
  console.log('5. Odd');
}

// 6. Age check
const age = 20;
if (age >= 18) {
  console.log('6. Can vote');
} else {
  console.log('6. Cannot vote yet.');
}

// 7. Grade determiner
const score = 85;
let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else {
  grade = 'F';
}
console.log('7.', grade);

// 8. Age check with the ternary operator
const votingMessage = age >= 18 ? 'Can vote' : 'Cannot vote yet.';
console.log('8.', votingMessage);

// 9. Strict comparison
const temp1 = 20;
const temp2 = 20;
if (temp1 === temp2) {
  console.log('9. The temperatures are strictly equal.');
} else {
  console.log('9. The temperatures are different.');
}

// Section 3: Loops

// 10. Count from 1 to 10
console.log('10. Count from 1 to 10:');
for (let number = 1; number <= 10; number++) {
  console.log(number);
}

// 11. Count down from 5 to 1
console.log('11. Countdown:');
let remaining = 5;
while (remaining >= 1) {
  console.log(remaining);
  remaining--;
}

// 12. Sum the integers from 1 to 50
let total = 0;
for (let number = 1; number <= 50; number++) {
  total += number;
}
console.log('12.', total);

// 13. Skip 7
console.log('13. Count from 1 to 10, skipping 7:');
for (let number = 1; number <= 10; number++) {
  if (number === 7) {
    continue;
  }
  console.log(number);
}

// 14. Stop when the counter reaches 15
console.log('14. Stop before printing 15:');
for (let number = 1; number <= 20; number++) {
  if (number === 15) {
    break;
  }
  console.log(number);
}

// Section 4: Functions

// 15. Simple function
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log('15.', greetUser(userName));

// 16. Function with a calculation
function calculateArea(width, height) {
  return width * height;
}
console.log('16.', calculateArea(5, 8));

// 17. Concise arrow function
const calculateAreaArrow = (width, height) => width * height;
console.log('17.', calculateAreaArrow(5, 8));

// 18. The separate scope.js script demonstrates an intentional ReferenceError.
console.log('18. Run node scope.js to observe the scope error.');

// 19. Default parameter
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log('19.', power(4));

// Section 5: Arrays

// 20. Declare an array and access its second element
const colors = ['Red', 'Green', 'Blue'];
console.log('20.', colors);
console.log('   Second color:', colors[1]);

// 21. Add an element to the end
colors.push('Yellow');
console.log('21.', colors);

// 22. Iterate over an array
const numbers = [2, 4, 6, 8, 10];
console.log('22. Array elements:');
for (const number of numbers) {
  console.log(number);
}

// 23. Sum the elements in an array
let arrayTotal = 0;
for (const number of numbers) {
  arrayTotal += number;
}
console.log('23.', arrayTotal);

// 24. Find the largest number
const data = [3, -4, 12, 7, 2];
console.log('24.', Math.max(...data));

// 25. Array of objects (bonus)
const books = [
  { title: 'The Little Prince', pages: 96 },
  { title: 'The Hobbit', pages: 310 },
];
console.log('25.', books[1].title);
