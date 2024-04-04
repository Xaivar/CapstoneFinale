<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $Users = User::all();
        return response()->json($Users);
    }

    public function store(Request $request)
    {
        $User = new User();
        $User->name = $request->input('name');
        $User->save();

        return response()->json($User, 201);
    }
    public function show($id)
    {
        $User = User::find($id);
        if (!$User) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($User);
    }
    public function update(Request $request, $id)
    {
        $User = User::find($id);
        if (!$User) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $User->name = $request->input('name');
        // Update other properties as needed
        $User->save();

        return response()->json($User);
    }

    // Delete an existing User
    public function destroy($id)
    {
        $User = User::find($id);
        if (!$User) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $User->delete();

        return response()->json(['message' => 'User deleted'], 200);
    }
}
