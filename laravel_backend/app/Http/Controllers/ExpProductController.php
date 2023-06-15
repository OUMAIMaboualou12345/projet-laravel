<?php

namespace App\Http\Controllers;
use App\Models\ExpProduct;
use Illuminate\Http\Request;

class ExpProductController extends Controller
{
    public function index()
    {
        $expPro=ExpProduct::all();
        return view('expPro.index', compact('expPro'));
    }
}
