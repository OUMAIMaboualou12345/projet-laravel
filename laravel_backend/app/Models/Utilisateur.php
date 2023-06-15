<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Utilisateur extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'role',
        'genre',
        // 'photo',
        'password',
    ];
    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->diffForHumans();
    }
}
