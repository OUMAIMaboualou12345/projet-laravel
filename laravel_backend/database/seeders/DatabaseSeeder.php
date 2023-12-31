<?php

namespace Database\Seeders;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //  \App\Models\User::factory(4)->create()
         \App\Models\Category::factory(15)->create();
         \App\Models\Product::factory(20)->create();
         \App\Models\ExpProduct::factory(1)->create();
         \App\Models\Utilisateur::factory(5)->create();


        // \App\Models\User::factory()->create([

        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
