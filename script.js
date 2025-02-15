let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} руб.`;

        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Общая сумма: ${totalPrice} руб.`;

}
