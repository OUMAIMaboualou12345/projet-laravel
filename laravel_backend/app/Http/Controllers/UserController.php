<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

// use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users=User::all();
        return $users;
    }

    public function store(Request $request){
        $user= new User();
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->phone=$request->input('phone');
        $user->password=$request->input('password');
        $user->save();
        return $user;
    }

    //login methode
    // public function login(Request $request)
    // {
    //     $credentials = $request->only('email', 'password');
    //     if (Auth::attempt($credentials)) {
    //         $user = Auth::user();
    //         // $token = $user->createTok('AuthToken')->accessToken;
    //         return response()->json('token' );
    //     }
    //     return response()->json(['error' => 'Unauthorized'], 401);
    // }

    public function login(Request $req)
    {
        $password= $req->input('password');
        $email= $req->input('email');
        $user=User::where('email',$email)->first();
        if(!$user || !Hash::check($password , $user->password)){
            return ["error"=>"email or password does not correct.....!"];
        }
        return $user;
    }
    public function register(Request $req)
    {
        $user= new user ;
        $user->name=$req->input("name");
        $user->email=$req->input("email");
        $user->phone=$req->input("phone");
        $user->password=Hash::make($req->input("password"));
        $user->save();
        return $user;
    }

    public function destroy($id){
        $deleteUser= User::where('id',$id)->delete();
        if($deleteUser){
            return [
                'message'=>"user has been delete",
                'status'=>200
        ];
        }else{
            return ['result'=>"user id not found"];
        }
    }

}
