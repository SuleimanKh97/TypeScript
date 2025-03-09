// TS task 2 : 

// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. 
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects 
// (an array of subjects). Print all the subjects the teacher teaches.

// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity.
//  Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity)
//  for product and when you submit the form it will save the product inside array 
// in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product

// task:1
// interface Person {
//     name: string;
//     age: number;
// }

// const persons: Person[] = [{ name: 'ahmad', age: 20 }, { name: "salem", age: 16 }, { name: "salem", age: 16 }];

// for (let i: number = 0; i < persons.length; i++) {
//     if (persons[i].age > 18) { console.log("Adult") }
//     else { console.log("Minor") }
// }
//end of Task:1///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task:2///////////////////////////////////////////////////////////////////////////////////////////////////////////

// interface Subjects {
//     name: string;
//     year: Number;
// }

// interface Teacher {
//     name: string;
//     subject: string[];
// }

// function printSubjects(teacher: Teacher): void {

//     console.log(`The Techer ${teacher.name} is Teaching :`);
//     teacher.subject.forEach(e => {
//         console.log(e);
//     });

// }
// printSubjects({ name: "ahmad", subject: ["Math", "E"] });

// const teacher: Teacher[] = [{ name: "ahmad", subject: [{ name: "Math", year: 5 }] }, { name: "Salem", subject: [{ name: "E", year: 6 }] },
// { name: "Salem", subject: [{ name: "E", year: 8 }] }, { name: "ahmad", subject: [{ name: "Math", year: 9 }] }]

// for (let i: number = 0; i < teacher.length; i++)
//     console.log(`The Techer ${teacher[i].name} is Teaching ${teacher[i].subject}`);

//task : 2 end//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Task:3///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity.
//  Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// interface Product {
//     name : string;
//     price : number;
//     quantity : number;
// }

// const products: Product[] = [{ name: "apple", price: 5, quantity: 6 }, { name: "banana", price: 10, quantity: 4 }, { name: "orange", price: 15, quantity: 7 }];

// for (let i: number = 0; i < products.length; i++) {
//     if (products[i].quantity > 5) { 
//         products[i].price = products[i].price * 0.85;
//         console.log(`The price of ${products[i].name} is ${products[i].price}`); 
// }
// }

//end of task 3/////////////////////////////////////////////////
//task 4:
// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity)
//  for product and when you submit the form it will save the product inside array 
// in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product

interface Product {
    name: string;
    description?: string;
    price: unknown;
    quantity: unknown;
}

var nameinput: unknown = document.getElementById("name");
var descriptioninput: unknown = document.getElementById("description");
var priceinput: unknown = document.getElementById("price");
var quantityinput: unknown = document.getElementById("quantity");

var productinfo: Product[] = JSON.parse(localStorage.getItem("products") || "[]");
function getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
}

function displayProducts() {
    const productList = document.getElementById('productList') as HTMLDivElement;
    productList.innerHTML = '';
    getProducts().forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<strong>${product.name}</strong><br>${product.description}<br>Price: $${product.price}<br>Quantity: ${product.quantity}`;
        productList.appendChild(card);
    });
}




(<HTMLInputElement>document.getElementById("productForm")).addEventListener("submit", function (e) {
    e.preventDefault();
    var name: string = (<HTMLInputElement>nameinput).value.trim();
    var description: string = (<HTMLInputElement>descriptioninput).value.trim();
    var price: unknown = (<HTMLInputElement>priceinput).value.trim();
    var quantity: unknown = (<HTMLInputElement>quantityinput).value.trim();
    // console.log(name, description, price, quantity);

    if (!name || !description || !price || !quantity) {
        alert("Please fill all the fields");
    }

    // interface Product {
    //     name: string;
    //     description: string;
    //     price: unknown;
    //     quantity: unknown;
    // };
    const product: Product = { name: name, description: description, price: price, quantity: quantity };
    (productinfo as Product[]).push(product);
    localStorage.setItem("products", JSON.stringify(productinfo));
}
    // const products: Product[] = [{ name: "apple", description: "fruit", price: 5, quantity: 6 }, { name: "banana", description: "fruit", price: 10, quantity: 4 }, { name: "orange", description: "fruit", price: 15, quantity: 7 }];
    // localStorage.setItem("products", JSON.stringify(products));

    // var product = JSON.parse(localStorage.getItem("products"));
)
displayProducts();
//end of task 4/////////////////////////////////////////////////

//end of task 2///////////////////////////////////////////////////////////////////////////////////////////////////////////