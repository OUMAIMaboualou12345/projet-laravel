<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function show($id)
    {
        $category= Category::find($id);
        return $category;
    }

    public function search($id)
    {
        $search= Category::where('categoryName','like',"%$id%")
        ->orWhere('id','like',"%$id%")
        ->get();
        if($search){
            return $search;
        }else{
            return ("not found");
        }
    }

    public function getCatById($id)
    {
        $getById= Category::where('id',$id)->get();
        if($getById){
            return $getById;
        }else{
            return ("not found");
        }
    }

    public function store(Request $request)
    {
        $categorys= new Category();
        $categorys->categoryName=$request->input('categoryName');
        $categorys->save();
        // Category::create([
        //     "categoryName"=>$request->categoryName,
        // ]);
        // return $categorys;
        return [
            'status'=>200,
            'messege'=>'Category added successflly'
        ];
    }

    public function delete($id)
    {
        // $categoDleted= Category::find($id);
        // $categoDleted->delete();
        $categoDleted= Category::where('id',$id)->delete();
        if($categoDleted){
            return [
                'message'=>"category has been delete",
                'status'=>200
        ];
        }else{
            return ['result'=>"category id not found"];
        }
    }

    public function update(Request $request ,string $id){
        $category=Category::findOrFail($id);
        $category->update([
            'categoryName'=>$request->categoryName,
        ]);
        return $category;
    }


}
