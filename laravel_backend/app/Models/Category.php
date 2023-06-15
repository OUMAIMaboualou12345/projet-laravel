<?php

namespace App\Models;
use App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Category extends Model
{
    use HasFactory;
    protected $table = "categorys";
    protected $fillable = [
        'categoryName',
    ];
    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->diffForHumans();
    }
    // public $timestamps=false;
    // public function getProduct(){
    //     return $this->hasMany(Product::class,'category_id');
    // }
}
