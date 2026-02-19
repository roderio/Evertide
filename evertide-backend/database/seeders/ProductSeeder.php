<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'RTX 4090 Phantom GS',
                'description' => 'Flagship GPU for maximum FPS.',
                'price' => 1799.99,
                'category' => 'gpu',
                'image_path' => 'assets/images/gpu.png',
            ],
            [
                'name' => 'Intel Core i9-14900KS',
                'description' => 'The fastest processor on the market.',
                'price' => 699.99,
                'category' => 'cpu',
                'image_path' => 'assets/images/cpu.png',
            ],
            [
                'name' => 'Evertide Prism Case',
                'description' => 'Custom mid-tower glass case.',
                'price' => 199.99,
                'category' => 'case',
                'image_path' => 'assets/images/case.png',
            ],
        ];

        foreach ($products as $product) {
            \App\Models\Product::create($product);
        }
    }
}
