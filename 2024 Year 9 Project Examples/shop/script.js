const items = document.getElementById("items");
const totalOutput = document.getElementById("totalOutput");
const countOutput = document.getElementById("countOutput");


let products = [
    { name: 'Product 1', category: 'Category 1', price: 10.99, image: "" },
    { name: 'Product 2', category: 'Category 2', price: 20.49, image: "" },
    { name: 'Product 3', category: 'Category 1', price: 15.99, image: "" },
    { name: 'Product 4', category: 'Category 3', price: 5.99, image: "" },
    { name: 'Product 5', category: 'Category 2', price: 12.49, image: "" },
    { name: 'Product 6', category: 'Category 1', price: 8.99, image: "" },
    { name: 'Product 7', category: 'Category 3', price: 18.99, image: "" },
    { name: 'Product 8', category: 'Category 2', price: 7.49, image: "" },
    { name: 'Product 9', category: 'Category 1', price: 14.99, image: "" },
    { name: 'Product 10', category: 'Category 3', price: 11.99, image: "" }
];

var basket = [];
var total = 0;

loadItems();

//load the items into shop view
function loadItems() {
    var output = "";
    for (var i = 0; i < products.length; i++) {
        output += `<div class="box"><h4>${products[i].name}</h4>
                    <img src="${products[i]}">
                    <p>$${products[i].price}</p><br>
                    <button onclick="addToBasket(${i})">Buy</button></div>`;
    }
    items.innerHTML = output;
}

function addToBasket(id) {
    total += products[id].price;
    basket.push(products[id]);
    //update output
    countOutput.innerHTML = "Items in Basket: " + basket.length;
    totalOutput.innerHTML = "Total: $" + total;
}

function viewBasket() {
    items.innerHTML = "";
    output = "<h2>Items Ordered</h2><ul>";
    for (var i = 0; i < basket.length; i++) {
        output += `<li><img src="${products[i]}"> ${products[i].name} - $${products[i].price}</li>`
    }
    output += "</ul>"
    items.innerHTML = output;
}