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


        btn.className = 'floating-cart-btn fixed bottom-8 right-8 bg-black/60 backdrop-blur-md border-2 border-blue-600 text-blue-500 px-6 py-3 rounded-full font-bold text-base z-50 flex items-center gap-3 shadow-lg hover:bg-blue-600/10 hover:-translate-y-1 transition-all duration-300';
        btn.innerHTML = `<span class="btn-text">Go to Cart</span> <span class="cart-counter bg-blue-600 text-white rounded-full px-2 py-0.5 text-sm min-w-[24px] text-center">${getCartCount()}</span>`;
        document.body.appendChild(btn);
    } else {
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

        btn.classList.add('px-8', 'scale-105', 'bg-blue-600', 'text-white', 'border-transparent');
        btn.classList.remove('text-blue-500', 'bg-black/60');


        const counter = btn.querySelector('.cart-counter');
        if (counter) {
            counter.classList.remove('bg-blue-600', 'text-white');
            counter.classList.add('bg-white', 'text-blue-600');
        }

        setTimeout(() => {
            btn.classList.remove('px-8', 'scale-105', 'bg-blue-600', 'text-white', 'border-transparent');
            btn.classList.add('text-blue-500', 'bg-black/60');


            if (counter) {
                counter.classList.add('bg-blue-600', 'text-white');
                counter.classList.remove('bg-white', 'text-blue-600');
            }

            btnText.innerText = 'Go to Cart';
        }, 2000);
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
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

    const cartTotalElement = document.getElementById('cart-total');

    if (!cartContainer || !cartTotalElement) return;

    const cart = getCart();
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-gray-400 italic">Your cart is empty.</p>';
        cartTotalElement.innerText = '0.00';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');

        itemElement.className = 'flex items-center gap-4 p-4 border-b border-white/10 last:border-0 bg-white/5 rounded-lg';


        itemElement.innerHTML = `
            <div class="h-16 w-16 bg-white rounded p-1 flex-shrink-0">
                <img src="${item.image}" alt="${item.title}" class="h-full w-full object-contain">
            </div>
            
            <div class="flex-1 min-w-0">
                <h4 class="text-white font-bold truncate">${item.title}</h4>
                <p class="text-blue-400">$${item.price}</p>
            </div>
            
            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 bg-black/40 rounded px-2 py-1 border border-white/10">
                    <button onclick="updateQuantity(${item.id}, -1)" class="text-gray-400 hover:text-white px-2 transition-colors">-</button>
                    <span class="text-white font-medium min-w-[20px] text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="text-gray-400 hover:text-white px-2 transition-colors">+</button>
                </div>
                
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-400 p-2 transition-colors" title="Remove">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    cartTotalElement.innerText = calculateTotal();
}

document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById('cart-items')) {
        renderCart();
    }
});
