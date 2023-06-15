<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $products=Product::all();
        return $products;
    }

    public function getproductById($id)
    {
        $getById= Product::where('id',$id)->get();
        if($getById){
            return $getById;
        }else{
            return ("not found");
        }
    }

    public function search($id)
    {
        $search= Product::where('name','like',"%$id%")
        ->orWhere('category_id','like',"%$id%")
        ->orWhere('id','like',"%$id%")
        ->get();
        if($search){
            return $search;
        }else{
            return ("not found");
        }
    }

    public function findProductByName($nom)
    {
        $productsFind=Product::where('name',$nom)->get();
        if($productsFind){
            return $productsFind;
        }else{
            return ['result'=>"product ".$nom." not found"];
        }
    }

    public function create(){
        $products= Product::all();
        return view('produit.create',compact("products"));
    }

    public function store(Request $request){
        $product= new Product();
        $product->name=$request->input('name');
        $product->description=$request->input('description');
        $product->price=$request->input('price');
        $product->stock=$request->input('stock');
        $product->expDate=$request->input('expDate');
        $product->category_id=$request->input('category_id');
        // $product->photo=$photoName;
        $product->save();
        return $product;
    }

    public function destroy($id){
        $deletProduct= Product::where('id',$id)->delete();
        if($deletProduct){
            return [
                'message'=>"product has been delete",
                'status'=>200
        ];
        }else{
            return ['result'=>"product id not found"];
        }
    }

    public function getbyorderpriceDESC()
    {
        $users = DB::table('products')->orderBy('price','desc')->get();
        return $users;
    }
    public function productOrderByName()
    {
        $users = Product::orderBy('name','asc')->get();
        return $users;
    }
    public function productOrderByStock()
    {
        $users = Product::orderBy('stock','asc')->get();
        return $users;
    }
    public function productOrderByExpDate()
    {
        $users = Product::orderBy('expDate','asc')->get();
        return $users;
    }

    public function show($id){
        $Product = Product::findOrFail($id);
        $Category = Category::findOrFail($Product->id);
        return view('Product.show',compact("Product","Category"));

    }
    public static  function edit($id){
        $Product = Product::find($id);
        $Categorys  = Category::all();
        return view("Product.edit",compact("Product","Categorys"));
    }

    public function update(Request $request, $id){
        $Product = Product::find($id);
        $Product->update([
           "name"=>$request->name,
           "description"=>$request->description,
           "price"=>$request->price,
           "stock"=>$request->stock,
           "category_id"=>$request->category_id
            ]);
            return $Product ;
        }
}




