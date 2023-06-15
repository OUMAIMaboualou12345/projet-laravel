<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class ExpProduct extends Model
{
    use HasFactory;
    protected $table = "expProducts";
    protected $fillable = [
        'product_id',
        'product_name',
        'expDate'
    ];
    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->diffForHumans();
    }
}
