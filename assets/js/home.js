// DOM Load Event
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    setupScrollAnimations();
});
// Load Featured Products
async function loadFeaturedProducts() {
    const container = document.getElementById('featured-products-container');
    if (!container) return;
    try {
        // Fetch Product Data
        const response = await fetch('assets/data/products.json');
        const products = await response.json();
        // Filter Featured Items
        const featured = [
            products.find(p => p.category === 'gpu' && p.price > 1000),
            products.find(p => p.category === 'case'),
            products.find(p => p.category === 'cpu' && p.price > 500)
        ].filter(Boolean);
        // Render Products
        container.innerHTML = featured.map((product, index) => `
            <div class="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-on-scroll" style="transition-delay: ${index * 100}ms">
                <div class="aspect-[4/3] overflow-hidden p-6 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                    <img src="${product.image.replace('../assets/', 'assets/')}" alt="${product.title}" 
                         class="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-blue-400 text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full bg-blue-500/10">${product.category}</span>
                        <span class="text-white font-bold">$${product.price}</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">${product.title}</h3>
                    <p class="text-gray-400 text-sm line-clamp-2 mb-4">${product.description}</p>
                    <a href="pages/store.html" class="inline-flex items-center text-white text-sm font-bold hover:text-blue-400 transition-colors">
                        View Details 
                        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        `).join('');
        setupScrollAnimations();
    } catch (error) {
        // Handle Fetch Error
        console.warn('Fetch failed (likely CORS), using fallback data:', error);
        const fallbackProducts = [
            {
                title: "NVIDIA GeForce RTX 4090",
                price: 1599.99,
                description: "The ultimate GeForce GPU. Leap in performance and AI-powered graphics.",
                category: "gpu",
                image: "assets/images/gpu.png"
            },
            {
                title: "Lian Li O11 Dynamic EVO",
                price: 169.99,
                description: "Mid-tower chassis with dual chamber design and tempered glass.",
                category: "case",
                image: "assets/images/case.png"
            },
            {
                title: "Intel Core i9-13900K",
                price: 589.99,
                description: "24 cores (8 P-cores + 16 E-cores) and up to 5.8 GHz. Unlocked.",
                category: "cpu",
                image: "assets/images/cpu.png"
            }
        ];
        // Render Fallback Products
        container.innerHTML = fallbackProducts.map((product, index) => `
            <div class="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-on-scroll" style="transition-delay: ${index * 100}ms">
                <div class="aspect-[4/3] overflow-hidden p-6 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                    <img src="${product.image}" alt="${product.title}" 
                         class="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-blue-400 text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full bg-blue-500/10">${product.category}</span>
                        <span class="text-white font-bold">$${product.price}</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">${product.title}</h3>
                    <p class="text-gray-400 text-sm line-clamp-2 mb-4">${product.description}</p>
                     <a href="pages/store.html" class="inline-flex items-center text-white text-sm font-bold hover:text-blue-400 transition-colors">
                        View Details 
                        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        `).join('');
        setupScrollAnimations();
    }
}
// Scroll Animation Observer
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                entry.target.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    // Observe Elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}
