<?php

namespace App\Http\Controllers;

use App\Models\IndirizziStudio;
use App\Http\Requests\StoreIndirizziStudioRequest;
use App\Http\Requests\UpdateIndirizziStudioRequest;

class IndirizziStudioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $indirizziStudio = IndirizziStudio::all();
        return response()->json($indirizziStudio);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIndirizziStudioRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(IndirizziStudio $indirizziStudio)
    {
        $indirizziStudio = IndirizziStudio::find($indirizziStudio->id);
        if (!$indirizziStudio) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        return response()->json($indirizziStudio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(IndirizziStudio $indirizziStudio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIndirizziStudioRequest $request, IndirizziStudio $indirizziStudio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(IndirizziStudio $indirizziStudio)
    {
        //
    }
}
