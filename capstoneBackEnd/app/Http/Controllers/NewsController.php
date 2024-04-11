<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use Illuminate\Http\Client\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();
        return response()->json($news);
    }

    public function store(Request $request)
    {
        //
    }
    public function show($id)
    {
        $news = News::find($id);
        if (!$news) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        return response()->json($news);
    }
    public function update(Request $request, $id)
    {
        $news = News::find($id);
        if (!$news) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        $news->name = $request->input('name');
        // Update other properties as needed
        $news->save();

        return response()->json($news);
    }

    // Delete an existing news
    public function destroy($id)
    {
        $news = News::find($id);
        if (!$news) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        $news->delete();

        return response()->json(['message' => 'Item deleted'], 200);
    }
}
