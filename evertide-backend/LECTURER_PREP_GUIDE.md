# 🎓 Evertide: Lecturer Preparation & Project Walkthrough Guide

This comprehensive guide is designed to help you completely understand the backend integration of the **Evertide** project. It explains how the static HTML site was converted into a Laravel application, how data flows, and prepares you for potential questions or live modification requests from your lecturer.

---

## 🏗️ 1. Architecture Overview (MVC)

Laravel follows the **Model-View-Controller (MVC)** architectural pattern. This is a crucial concept to explain to your lecturer:

*   **Model:** Represents your data and business logic. It interacts with the database.
    *   *Our Project:* `app/Models/Product.php` connects to the `products` table in MySQL.
*   **View:** The UI / frontend that the user sees.
    *   *Our Project:* The `.blade.php` files inside `resources/views/` (e.g., `store.blade.php`).
*   **Controller:** The middleman. It takes a request from the user, asks the Model for data, and gives that data to the View.
    *   *Our Project:* `app/Http/Controllers/ProductController.php`.

---

## 🛤️ 2. How the Application Flows (Step-by-Step)

If your lecturer asks: *"Walk me through what happens when a user visits the Store page."*

Here is the exact flow you should explain:

1.  **The Request (Route):** The user goes to `/store` in the browser. Laravel checks `routes/web.php` and sees that `/store` is mapped to the `ProductController@index` method.
2.  **The Controller:** The `ProductController` takes over. Inside its `index()` function, it runs `$products = Product::all();`.
3.  **The Model & Database:** The `Product` model executes a SQL query (`SELECT * FROM products`) behind the scenes to fetch the data from your Laragon MySQL database.
4.  **The View:** The Controller passes that `$products` variable to the `store.blade.php` view.
5.  **The Frontend Translation:** Inside `store.blade.php` (around line 108), we use the Blade directive `@json($products)` to convert the PHP array of products into a JavaScript array.
6.  **The Render:** Finally, our Vanilla JavaScript loops through that array and creates the HTML cards you see on the screen.

---

## 📂 3. Key Files and Where to Find Them

You need to know where things live so you can quickly navigate there if asked to make a change:

*   **Database Credentials:** `.env` (This is where we connected to `evertide_backend` and set the password to `0000`).
*   **Database Structure (Schema):** `database/migrations/...create_products_table.php`. If the lecturer asks where the columns (name, price, etc.) are defined.
*   **Mock Data (Seeder):** `database/seeders/ProductSeeder.php`. This is where the 3 initial products (RTX 4090, CPU, Case) were typed out to populate the database initially.
*   **URLs / Links:** `routes/web.php`. Every valid URL in the application must be registered here.
*   **HTML & CSS:** `resources/views/`. All the HTML templates are here. Remember, we changed `.html` to `.blade.php` so Laravel can inject variables into them.
*   **Javascript & CSS:** `public/assets/`. Since Laravel is a secure framework, only files in the `public` folder are accessible directly by the browser.

---

## ❓ 4. Anticipated Lecturer Questions & Answers

**Q1: "Why did you use `@json($products)` instead of generating the HTML directly with PHP loops like `@foreach`?"**
> **A:** Because originally, the site was built purely with Vanilla JavaScript rendering the product cards dynamically (for client-side filtering and search). By using `@json()`, I easily injected the secure backend database data directly into my existing, highly-responsive frontend JavaScript logic without having to rewrite the entire UI rendering method.

**Q2: "How would you add a completely new page to this website?"**
> **A:** Three steps! 
> 1. First, create a new view file (e.g., `resources/views/promotions.blade.php`). 
> 2. Second, register the URL in `routes/web.php` (e.g., `Route::get('/promo', function () { return view('promotions'); });`).
> 3. Third, update the navigation bar in my header to link to `{{ route('promo') }}`.

**Q3: "If I wanted to add a 'Stock Quantity' column to the products table, how do we do that?"**
> **A:** (If asked to do this live, see the Live Modification guide below). Explain: "I would create a new database migration to add an integer column named 'stock'. Then I would update the `Product` model to make it 'fillable'. Finally, I would update the Javascript to display 'Out of Stock' if the number is 0."

**Q4: "Why did you use `asset('assets/images/...')` for your images?"**
> **A:** In a Laravel application, URLs can be dynamic (like `/store?category=gpu`). If we use relative paths like `../images`, they will break depending on what URL we are currently on. The `asset()` helper function guarantees the browser generates an absolute URL directly to the `public/` directory, so images never break regardless of the route.

---

## 🛠️ 5. Cheat Sheet: Doing Live Modifications 

If your lecturer asks you to prove you know how it works by making a live change, here is your cheat sheet:

### Scenario A: "Change the price of the RTX 4090 to something else."
1. You can do this two ways. The easiest is using the database directly. 
2. Open your MySQL Workbench/phpMyAdmin.
3. Open the `evertide_backend` database, view the `products` table, and manually change the price of the RTX 4090 to `2000.00`.
4. Refresh the page in the browser. It updates instantly because it's pulling from the database!

### Scenario B: "Add a 4th product to the database."
1. Open `database/seeders/ProductSeeder.php`.
2. Add a new array to the list:
   ```php
   [
       'name' => 'New Awesome RAM',
       'description' => 'Fast memory.',
       'price' => 99.99,
       'category' => 'ram',
       'image_path' => 'assets/images/ram.png',
   ],
   ```
3. Open the terminal and run: `php artisan migrate:fresh --seed`
4. Refresh the browser; the new product will be there! *(Note: this deletes the DB and recreates it with the new seed data).*

### Scenario C: "Change the URL of the 'About' page to '/our-story'."
1. Open `routes/web.php`.
2. Find the About route: `Route::get('/about', ...)->name('about');`
3. Change `'/about'` to `'/our-story'`. 
4. Because we used `{{ route('about') }}` in the navigation bar, ALL links to the about page will automatically update to `/our-story` without needing to change any HTML! This demonstrates the power of named routes.

---

## 🚀 Final Advice Before Presentation

*   Be confident! You successfully integrated a modern frontend into a robust backend framework.
*   If you get errors during the presentation, read the Laravel Error Screen (Ignition). It almost always tells you exactly which file and line number caused the issue. Common issues are forgetting a semicolon `;` or a typo in a variable name. 
*   Keep your terminal open running `php artisan serve` (or `php -S 127.0.0.1:8100 -t public/` as we did).
