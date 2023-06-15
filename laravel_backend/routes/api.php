<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ExpProductController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UtilisateurController;
use App\Models\ExpProduct;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//apis users

Route::controller(UtilisateurController::class)->group(function () {
    Route::get('/users','index');
    Route::get('/user/{id}','getuserById');
    Route::get('/users/order','getbyorderName');
    Route::get('/users/order/sexe','getbyorderSexe');
    Route::get('/users/order/role','getbyorderRole');
    Route::post('/login','loginAsAdmin');
    Route::post('/add/user','store');
    Route::put('/user/{id}','update');
    Route::delete('/delete/user/{id}','delete');
});
        // Route::post('/login',[SellerController::class,'login']);

//apis category
Route::controller(CategoryController::class)->group(function () {
    Route::get('/categorys','index');
    Route::get('/category/{id}','getCatById');
    Route::post('/add/category','store');
    Route::put('/category/{id}','update');
    Route::delete('/delete/category/{id}','delete');
    Route::get('/category/search/{id}', 'search');
});

//apis products
// Route::get('/products',[ProductController::class,'index']);
// Route::get('/findProduct/{id}',[ProductController::class,'findProductByName']);
// Route::post('/products',[ProductController::class,'store']);
// Route::put('/products',[ProductController::class,'update']);
// Route::delete('/delete/product/{id}',[ProductController::class,'destroy']);
Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::get('/product/{id}','getproductById');
    Route::get('/prod/price/order', 'getbyorderpriceDESC');
    Route::get('/prod/name/order', 'productOrderByName');
    Route::get('/prod/stock/order', 'productOrderByStock');
    Route::get('/prod/expdate/order', 'productOrderByExpDate');
    Route::get('/findProduct/{id}','findProductByName');
    Route::post('/products','store');
    Route::put('/product/{id}','update');
    Route::delete('/delete/product/{id}','destroy');
    Route::get('/product/search/{id}', 'search');
});


// Route::get('/expProduct',[ExpProductController::class,'index']);
Route::get('/expProduct', function () {
    $exp=ExpProduct::get();
    return response()->json($exp);
});

