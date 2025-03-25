let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");
    let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cartList.innerHTML = "";
    let total = 0;

    storedCart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = ${item.name} - $${item.price};
        cartList.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
}

function checkout() {
    alert("Proceeding to checkout...");
    localStorage.removeItem("cart");
    window.location.href = "checkout.html";
}

window.onload = loadCart;