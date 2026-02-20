# Evertide - Craft Your Legend

![Evertide Hero](assets/images/case.png)

Evertide is a modern, premium web application designed for a high-end online computer part and custom PC build shop. Featuring a striking Bento-style UI, glassmorphism aesthetics, and meticulously crafted animations, Evertide brings next-gen hardware to life with a fully immersive browsing experience.

> **Note:** This project began as a pure frontend homework assignment for a Web Programming I course and has been completely upgraded into a dynamic, data-driven PHP application powered by the **Laravel** framework and a **MySQL** database.

## Features

Evertide has been built around a clean, visually dynamic user experience prioritizing performance and design:
- **Immersive UI/UX:** 
  - Dark-mode aesthetics using custom-tailored glassmorphism panels.
  - Smooth page transitions and micro-animations upon scroll.
  - Fully responsive grid layout powered by Tailwind CSS.
- **Dynamic Store & Product Catalog:** Browse curated, high-performance PC components. The products on the store page are fetched dynamically from a backend MySQL database. Features live category filtering (GPUs, CPUs, Cases) and search capability.
- **Custom PC Builder Flow:** Prominent calls-to-action guiding users to start their ultimate custom build.
- **Dynamic Routing & Architecture:**
  - **Home:** Hero section, animated feature grid, statistics, FAQ preview, and newsletter subscription form.
  - **Store:** Product catalog demonstrating category filtering capabilities powered by Laravel backend controllers.
  - **About:** The story, mission, and guarantees behind Evertide.
  - **Cart:** Shopping cart management with interactive frontend logic persisting product selections.
  - **Contact:** Get in touch with customer support.
  - **FAQ:** A comprehensively designed Frequently Asked Questions page.
  - **Login & Register:** Beautifully styled user authentication interfaces.
  - **Payment:** A dedicated checkout and secure payment processing mockup page.

## Technologies Used

This project leverages a robust modern web development stack:
- **PHP Laravel 11:** Powering the backend architecture, Models, Views, and Controllers (MVC).
- **MySQL Database:** Relational database management storing the product catalog securely.
- **Blade Templating Engine:** Laravel's powerful UI engine for dynamically rendering web pages.
- **Tailwind CSS (via CDN):** Utility-first CSS framework for rapid, responsive UI development.
- **Vanilla JavaScript:** Powers interactive DOM manipulation, page transitions, responsive scroll navigation, filtering logic, and cart state management while consuming backend-injected data structures.

## Project Structure

```text
Evertide/
├── evertide-backend/       
│   ├── app/                
│   ├── database/            
│   ├── public/            
│   │   └── assets/          
│   ├── resources/           
│   │   └── views/           
│   ├── routes/              
│   └── .env                 
└── README.md               
```

## Getting Started

Follow these instructions to get the Laravel web application up and running locally.

### Prerequisites
- PHP 8.2 or higher
- Composer installed
- A MySQL server (like Laragon, XAMPP, or distinct MySQL installation)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/evertide.git
   ```
2. **Setup the Database:**
   - Open your MySQL management tool (e.g. Laragon, phpMyAdmin, MySQL Workbench).
   - Create a new database named `evertide_backend`.
3. **Navigate and Install Dependencies:**
   ```bash
   cd Evertide/evertide-backend
   composer install
   ```
4. **Configure Environment:**
   - Copy the `.env.example` file and rename it to `.env`.
   - Update the database credentials inside `.env` to match your local setup:
     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=evertide_backend
     DB_USERNAME=root
     DB_PASSWORD=your_password
     ```
5. **Run Migrations and Seed Data:**
   This sets up the `products` table and inserts the starting product catalog:
   ```bash
   php artisan migrate --seed
   ```
6. **Start the Development Server:**
   ```bash
   php artisan serve
   ```
7. **View the Application:**
   Open your browser and navigate to `http://localhost:8000` (or `http://127.0.0.1:8000`) to view Evertide!

## Responsiveness

Evertide has been rigorously styled to adapt fluidly to multiple screen sizes:
- **Desktop & Laptops:** Full grid layouts with hover micro-animations.
- **Tablets:** Adaptive column adjustments ensuring readability.
- **Mobile Devices:** Stacked layouts with touch-friendly navigation components.

## Custom Modifications

If you want to tweak colors or typography, the base Tailwind configuration is embedded directly within the `<script>` tag inside the `<head>` of the `index.blade.php` file. You can globally alter brand colors, fonts, or keyframe animations from this single configuration block.

!!!!!!!!!!!!!!!! THIS PROJECT HAS BEEN CREATED AS AN EXAMPLE FOR A UNIVERSITY HOMEWORK. !!!!!!!!!!!!!!!!
