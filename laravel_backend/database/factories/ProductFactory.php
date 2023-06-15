<?php

namespace Database\Factories;
use Illuminate\Support\Str;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $productArry=[
            'Vitamin A ',
            'Vitamin B Complex' ,
            'Vitamin B1',
            'Vitamin B12',
            'B12 Injection',
            'Vitamin B2',
            'Vitamin B6',
            'Aripiprazole',
            'Aromasin',
            'Asc acid',
            'Aspirin',
            'Atenolol',
            'Ativan',
            'Banzel',
            'Baqsimi',
            'Basaglar',
            'Bavencio',
            'Belbuca',
            'Belsomra',
            'Benadryl',
            'Benazepril',
            'Bendeka',
            'Benicar',
            'Bentyl',
            'Codeine',
            'Colace',
            'Colazal',
            'Diacomit',
            'Diastat',
            'Diazepam',
            'Diclofenac',
            'Dicyclomine',
            'Doxycycline',
            'Haldol',
            'Haloperidol',
            'Harvoni',
            'Hydrea',
            'Monurol',
            'Moringa',
            'Morphine',
            'COVID-19 Vaccine',
            'Ranolazine',
            'Rapamune',
            'Reclast',
            'Reglan',
            'Xenical',
            'Xenleta',
            'Xeomin',
            'Zometa',
            'Zomig'
        ];
        return [
            'name'=>Arr::random($productArry),
            'description'=>fake()->sentence(),
            'price'=>rand(10.01,399.99),
            'stock'=>rand(1,1000),
            'expDate'=>fake()->date(),
            'category_id'=>Category::all()->random()->categoryName,
            // 'photo'=>Arr::random(['123.jpg','456.jpg'])
        ];
    }
}
