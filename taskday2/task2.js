// TS task 2 : 
var nameinput = document.getElementById("name");
var descriptioninput = document.getElementById("description");
var priceinput = document.getElementById("price");
var quantityinput = document.getElementById("quantity");
var productinfo = JSON.parse(localStorage.getItem("products") || "[]");
function getProducts() {
    return JSON.parse(localStorage.getItem('products') || '[]');
}
function displayProducts() {
    var productList = document.getElementById('productList');
    productList.innerHTML = '';
    getProducts().forEach(function (product) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = "<strong>".concat(product.name, "</strong><br>").concat(product.description, "<br>Price: $").concat(product.price, "<br>Quantity: ").concat(product.quantity);
        productList.appendChild(card);
    });
}
document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = nameinput.value.trim();
    var description = descriptioninput.value.trim();
    var price = priceinput.value.trim();
    var quantity = quantityinput.value.trim();
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
    var product = { name: name, description: description, price: price, quantity: quantity };
    productinfo.push(product);
    localStorage.setItem("products", JSON.stringify(productinfo));
}
// const products: Product[] = [{ name: "apple", description: "fruit", price: 5, quantity: 6 }, { name: "banana", description: "fruit", price: 10, quantity: 4 }, { name: "orange", description: "fruit", price: 15, quantity: 7 }];
// localStorage.setItem("products", JSON.stringify(products));
// var product = JSON.parse(localStorage.getItem("products"));
);
displayProducts();
//end of task 4/////////////////////////////////////////////////
//end of task 2///////////////////////////////////////////////////////////////////////////////////////////////////////////
