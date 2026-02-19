<!DOCTYPE html>
<html lang="en">
<!-- Page Head -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evertide | About</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Tailwind Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            blue: '#2563EB',
                            dark: '#050505',
                            accent: '#3B82F6'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
                        'slide-up': 'slideUp 0.8s ease-out forwards',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <!-- Custom Styles -->
    <style>
        body {
            background-color: #050505;
            background-image:
                radial-gradient(circle at 15% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 25%),
                radial-gradient(circle at 85% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 25%);
            background-attachment: fixed;
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #000;
        }

        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #444;
        }
    </style>
</head>
<!-- Page Body -->

<body class="min-h-screen text-white font-sans opacity-0 transition-opacity duration-500 ease-in-out" id="body-content">
    <!-- Navigation Header -->
    <header
        class="h-20 px-6 md:px-12 fixed w-full top-0 z-50 glass-panel border-b-0 border-white/5 transition-all duration-300"
        id="navbar">
        <div class="max-w-7xl mx-auto h-full flex justify-between items-center">
            <a href="{{ route('home') }}" class="text-2xl font-bold tracking-tight flex items-center gap-2 group">
                <div
                    class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <span class="text-white group-hover:text-blue-200 transition-colors">Evertide</span>
            </a>
            <nav class="hidden md:flex gap-8 items-center">
                <a href="{{ route('home') }}"
                    class="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="{{ route('store') }}"
                    class="text-sm font-medium text-gray-400 hover:text-white transition-colors">Store</a>
                <a href="{{ route('about') }}" class="text-sm font-medium text-blue-400">About</a>
                <a href="{{ route('faq') }}" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
                <a href="{{ route('contact') }}"
                    class="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
            <div class="flex gap-4 items-center">
                <a href="{{ route('cart') }}" class="relative group p-2">
                    <svg class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                </a>
                <a href="{{ route('login') }}"
                    class="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">Sign
                    In</a>
                <a href="{{ route('store') }}"
                    class="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Build PC
                </a>
            </div>
        </div>
    </header>
    <!-- Main Content -->
    <main class="pt-32 pb-24 px-6">
        <div class="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 animate-slide-up">
            <h1
                class="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Our Story</h1>
            <div class="prose prose-lg prose-invert max-w-none">
                <p class="text-gray-300 leading-relaxed mb-8">
                    Evertide was founded with a singular mission: to empower builders, gamers, and creators in Iraq with
                    access to high-quality, authentic computer components.
                </p>
                <p class="text-gray-300 leading-relaxed mb-8">
                    We believe that technology is the bridge to the future. By providing a reliable platform for GPUs,
                    CPUs,
                    and custom builds, we are not just selling parts; we are fueling innovation and creativity across
                    the
                    region.
                </p>
                <div class="bg-blue-600/10 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                    <p class="text-blue-300 font-medium italic text-xl">"Quality, reliability, and speed - that's the
                        Evertide promise."</p>
                </div>
                <p class="text-gray-300 leading-relaxed">
                    Whether you're building your first gaming rig or upgrading a professional workstation, we are here
                    to
                    support your journey every step of the way. We verify every product, test every build, and stand
                    behind everything we sell.
                </p>
            </div>
            <!-- Statistics -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
                <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-1">5k+</div>
                    <div class="text-gray-500 text-sm">Happy Customers</div>
                </div>
            </div>
        </div>
    </main>
    <!-- Site Footer -->
    <footer class="bg-black/80 backdrop-blur-xl border-t border-white/5 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="space-y-4">
                <a href="{{ route('home') }}" class="text-2xl font-bold text-white flex items-center gap-2">
                    <div class="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    Evertide
                </a>
                <p class="text-gray-500 text-sm leading-relaxed">
                    Empowering the next generation of creators and gamers in Iraq with premium hardware and expert
                    support.
                </p>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Shop</h4>
                <ul class="space-y-3 text-sm text-gray-500">
                    <li><a href="{{ route('store') }}" class="hover:text-blue-400 transition-colors">All Products</a></li>
                    <li><a href="{{ route('store') }}?category=gpu" class="hover:text-blue-400 transition-colors">Graphics
                            Cards</a></li>
                    <li><a href="{{ route('store') }}?category=cpu" class="hover:text-blue-400 transition-colors">Processors</a>
                    </li>
                    <li><a href="{{ route('store') }}?category=case" class="hover:text-blue-400 transition-colors">Cases</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Support</h4>
                <ul class="space-y-3 text-sm text-gray-500">
                    <li><a href="{{ route('faq') }}" class="hover:text-blue-400 transition-colors">FAQs</a></li>
                    <li><a href="{{ route('contact') }}" class="hover:text-blue-400 transition-colors">Contact Us</a></li>
                    <li><a href="#" class="hover:text-blue-400 transition-colors">Shipping Information</a></li>
                    <li><a href="#" class="hover:text-blue-400 transition-colors">Returns & Warranty</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Follow Us</h4>
                <div class="flex gap-4">
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153-1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.488 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-white/5 pt-8 text-center text-xs text-gray-700">
            <p>&copy; 2024 Evertide | Crafted for Performance.</p>
        </div>
    </footer>
    <!-- Page Scripts -->
    <script src="{{ asset('assets/js/transition.js') }}"></script>
    <script src="{{ asset('assets/js/cart.js') }}"></script>
    <!-- Navbar Scroll Logic -->
    <script>
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-xl', 'shadow-2xl');
                navbar.classList.remove('border-b-0');
                navbar.classList.add('border-b');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-xl', 'shadow-2xl', 'border-b');
                navbar.classList.add('border-b-0');
            }
        });
        // Safety fallback
        setTimeout(() => {
            document.body.classList.remove('opacity-0');
        }, 800);
    </script>
</body>

</html>
