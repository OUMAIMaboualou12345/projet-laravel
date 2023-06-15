<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categoryArray=[
            "Cardiovascular",
            "Respiratory",
            'Gastrointestinal',
            'Renal',
            'Neurologic',
            'Psychiatric',
            'Endocrinology',
            'vitamin',
            'calcium',
            'injection',
            'Beauty',
            'Calories',
            'skimmer',
            'milk',
            'calmings drog'
        ];
        return [
            'categoryName'=>Arr::random( $categoryArray)
        ];
    }
}
