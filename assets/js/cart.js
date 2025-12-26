const CART_KEY = 'evertide_cart';

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    triggerCartAnimation();
    updateCartButtonCount();
}

document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.endsWith('cart.html')) {
        return;
    }


    if (!document.querySelector('.floating-cart-btn')) {
        const btn = document.createElement('a');
        btn.href = 'cart.html';

        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            btn.href = 'pages/cart.html';
        }

        btn.className = 'floating-cart-btn';
        btn.innerHTML = `<span class="btn-text">Go to Cart</span> <span class="cart-counter">${getCartCount()}</span>`;
        document.body.appendChild(btn);
    } else {
        // If button exists (static html?), update count
        updateCartButtonCount();
    }
});

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartButtonCount() {
    const counter = document.querySelector('.cart-counter');
    if (counter) {
        counter.innerText = getCartCount();
    }
}

function triggerCartAnimation() {
    const btn = document.querySelector('.floating-cart-btn');
    const btnText = btn.querySelector('.btn-text');

    if (btn && btnText) {
        btnText.innerHTML = '&#10003; Item Added!';
        btn.classList.add('expanded');

        setTimeout(() => {
            btn.classList.remove('expanded');
            btnText.innerText = 'Go to Cart';
        }, 2000);
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart(); // Re-render if on cart page
}

function updateQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart(cart);
        renderCart();
    }
}

function calculateTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-amount');

    if (!cartContainer || !cartTotalElement) return;

    const cart = getCart();
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.innerText = '0.00';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>$${item.price}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" class="btn-remove">Remove</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    cartTotalElement.innerText = calculateTotal();
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the cart page
    if (document.getElementById('cart-items')) {
        renderCart();
    }
});
