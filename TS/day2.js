console.log("TS Day2");
var games;
games = [{
        title: "God of War",
        price: 50,
        img: "./assets/images/God-of-War.jpg"
    },
    {
        title: 'Death Stranding',
        price: 70,
        img: "./assets/images/Death-Stranding.jpg"
    },
    {
        title: 'The Last Of Us 2',
        price: 40,
        img: "./assets/images/The-Last-Of-Us-2.jpg"
    }
];
// function loadProducts() {
//     const productsContainer = document.getElementById('productsContainer');
//     if (!productsContainer) return; // Add check to ensure element exists
//     productsContainer.innerHTML = ''; // Clear existing content
//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>${product.description}</p>
//             <p>Price: $${product.price.toFixed(2)}</p>
//         `;
//         productsContainer.appendChild(productElement);
//     });
// function buildGames(parent, games) {
//     var html = "";
//     games.forEach(function (game) {
//         //Set Our Itemp template
//         let itemTemplate :string = `
//     <li>
//        <h2>${game.title}</h2>
//        <div class="price">Price: $ ${game.price}</div>
//        <img src="${game.img}" alt="Image of ${game.title}" />
//     </li>`;
//         //update the html 
//         html += itemTemplate
//     });
//     //Update the parent once
//     parent.innerHTML += html;
// }
// buildGames(document.getElementById("gamesList"), games);
// let multiType:(number | string | boolean )[];
// multiType = ["adnan", 2000, true];
// console.log(multiType[0]);
// multiType.forEach(e => {
//     console.log(e);
// });
//--------------------------------------------------------------------------------
//return types
// function isEven(num: number): boolean {
//     return num % 2 == 0;
// }
// const numberChecked = isEven(50);
// console.log(numberChecked);
// function GreetFunction(name: string): void {
//     console.log(Hello, ${name});
// }
// GreetFunction("adnan");
//parameter types
// function introduction(name: string, age: number): string {
//     return Hello, my name is ${name} and I am ${age} years old.;
// }
// const intro = introduction("adnan", 24);
// console.log(intro);
//--------------------------------------------------------------------------------
//optional parameters
// function greet(name: string, isMorning?: boolean): string {
//     if (isMorning) {
//         return Good morning, ${name}!;
//     } else {
//         return Hello, ${name}!;
//     }
// }
// console.log(greet("adnan", true));
//default parameters
// function greet(name: string, timeOfDay = 5): string {
//     return Good ${timeOfDay}, ${name}!;
// }
// console.log(greet("adnan"));
// console.log(greet("adnan", 10));
//--------------------------------------------------------------------------------
//rest parameter
// function sumAll(...numbers: number[]): number {
//     return numbers.reduce((a, b) => a + b);
// }
// console.log("the total is : " + sumAll(1, 2, 3, 4, 5));
//--------------------------------------------------------------------------------
