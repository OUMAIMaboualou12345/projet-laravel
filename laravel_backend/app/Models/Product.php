<?php

namespace App\Models;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Product extends Model
{
    use HasFactory;
    protected $table = "products";
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'expDate',
        'category_id',
        // 'photo'
    ];
    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->diffForHumans();
    }
    // public $timestamps=false;

    // public function getCategory(){
    //     return $this->belongsTo(Category::class,'category_id');
    // }
}
