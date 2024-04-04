<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::all();
        return response()->json($items);
    }

    public function store(Request $request)
    {
        $item = new Item();
        $item->name = $request->input('name');
        $item->save();

        return response()->json($item, 201);
    }
    public function show($id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        return response()->json($item);
    }
    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        $item->name = $request->input('name');
        // Update other properties as needed
        $item->save();

        return response()->json($item);
    }

    // Delete an existing item
    public function destroy($id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        $item->delete();

        return response()->json(['message' => 'Item deleted'], 200);
    }
}

