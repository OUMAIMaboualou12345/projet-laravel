<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;


//dont forget USE  to import controllers
//also import Models into Controllers

Route::get('/users', [UserController::class, 'index'])->name('users');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/categorys', [CategoryController::class, 'index'])->name('categorys');

// Route::resource('user', UserController::class);
// Route::resources(['client'=> ClientController::class,
// 'commande'=> CommandeController::class]);

