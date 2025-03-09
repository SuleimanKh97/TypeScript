var message = 'Hello World';
console.log(message);
// Array
var numbers = [1, 2, 3, 4];
var numbers2 = [1, 2, 3, 4];
console.log(numbers);
console.log(numbers[0]);
numbers.push(5);
numbers.pop();
//conditional and loops statements
//else if:
var age = 20;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 21) {
    console.log("You are an adult but not 21 yet.");
}
else {
    console.log("You are 21 or older.");
}
//Loop Statements
//1 for:
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
//2 while:
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//3 do-while:
var j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
//4 for...of:
var names = ["Nada", "Ahmed", "Omar"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//5 for...in:
var person = { name: "Nada", age: 21 };
for (var key in person) {
    console.log(key + ": " + person[key]);
}
