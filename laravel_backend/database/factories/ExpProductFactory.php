<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ExpProduct>
 */
class ExpProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id'=>Product::all()->random()->id,
            'product_name'=>fake()->word(),
            'expDate'=>fake()->date(),
            // 'expDate'=>Product::all()->where(, '<=' ,date('d/y/y')),
        ];
    }
}
