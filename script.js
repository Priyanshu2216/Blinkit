// Product list
const products = ["Milk", "Bread", "Eggs", "Biscuit", "Chocolate", "Juice", "Rice", "Oil"];
let i = 0;

setInterval(() => {
   document.getElementById("searchInput").placeholder = `Search "${products[i]}"`; 
   i = (i + 1) % products.length;
}, 2000);
