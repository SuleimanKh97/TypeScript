let message: string = 'Hello World';
console.log(message);



// Array
let numbers: number[] = [1, 2, 3, 4];
let numbers2: Array<number> = [1, 2, 3, 4];

console.log(numbers);
console.log(numbers[0]);
numbers.push(5);
numbers.pop();


//conditional and loops statements
//else if:
let age: number = 20;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 21) {
  console.log("You are an adult but not 21 yet.");
} else {
  console.log("You are 21 or older.");
}

//Loop Statements
//1 for:
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//2 while:
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//3 do-while:
let j = 0;
do {
  console.log(j); 
  j++;
} while (j < 5);

//4 for...of:
let names: string[] = ["Nada", "Ahmed", "Omar"];
for (let name of names) {
  console.log(name);
}

//5 for...in:
let person = { name: "Nada", age: 21 };
for (let key in person) {
  console.log(key + ": " + person[key]); 
}
