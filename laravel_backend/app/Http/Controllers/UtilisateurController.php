<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    public function index()
    {
        $users = Utilisateur::all();
        return $users;
    }

    public function getbyorderName()
    {
        $users = DB::table('utilisateurs')->orderBy('name','asc')->get();
        return $users;
    }
    public function getbyorderRole()
    {
        $users = DB::table('utilisateurs')->orderBy('role','desc')->get();
        return $users;
    }
    public function getbyorderSexe()
    {
        $users = DB::table('utilisateurs')->orderBy('genre','desc')->get();
        return $users;
    }

    public function getuserById($id)
    {
        $getById = Utilisateur::where('id', $id)->get();
        if ($getById) {
            return $getById;
        } else {
            return ("not found");
        };
    }

    public function store(Request $request)
    {
        $user = new Utilisateur();
        $user->genre = $request->input('genre');
        $user->role = $request->input('role');
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        // $user->photo=$request->file('photo')->store('users');
        $user->password = $request->input('password');
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

    public function loginAsAdmin(Request $req)
    {
        $password = $req->input('password');
        $email = $req->input('email');
        $user = Utilisateur::where('email', $email)->first();
        if (!$user || $password!== $user->password  || $user->role!=='admin') {
            return [
                "message" => "email or password is not matched..!",
                'status'=>400
        ];
        }
        return $user;
    }

    public function loginAsSeller(Request $req)
    {
        $password = $req->input('password');
        $email = $req->input('email');
        $user = Utilisateur::where('email', $email)->first();
        if (!$user || $password!== $user->password  || $user->role!=='seller') {
            return [
                "message" => "email or password is not matched.!",
                'status'=>400
        ];
        }
        return $user;
    }
    // public function register(Request $req)
    // {
    //     $user = new Utilisateur;
    //     $user->name = $req->input("name");
    //     $user->email = $req->input("email");
    //     $user->phone = $req->input("phone");
    //     $user->password = Hash::make($req->input("password"));
    //     $user->save();
    //     return $user;
    // }

    public function delete($id)
    {
        $deleteUser = Utilisateur::where('id', $id)->delete();
        if ($deleteUser) {
            return [
                'message' => "user has been delete",
                'status' => 200
            ];
        } else {
            return ['result' => "user id not found"];
        }
    }

    public function update(Request $request, $id)
    {
        $user = Utilisateur::find($id);
        $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "role" => $request->role,
            "genre" => $request->genre
        ]);
        return $user;
    }
}
