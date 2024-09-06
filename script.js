const products = [
  {
    id: 1,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 348.0,
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 4",
    price: 249.99,
    image: "https://m.media-amazon.com/images/I/415WVhdt4SS._AC_SX522_.jpg",
  },
  {
    id: 3,
    name: "Nintendo Switch",
    price: 299.0,
    image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "GoPro HERO9 Black",
    price: 399.99,
    image: "https://m.media-amazon.com/images/I/81Szbr4wo5L._AC_SY450_.jpg",
  },
  {
    id: 5,
    name: "Apple MacBook Air (M1, 2020)",
    price: 999.0,
    image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
  },
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;

    cartItems.appendChild(cartItemDiv);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Initialize the page with products
displayProducts();
