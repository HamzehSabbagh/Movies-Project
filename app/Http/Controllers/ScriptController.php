<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Movie;
use App\Models\Script;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScriptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $scripts = Script::with('movie')->latest()->paginate(3);
        

        return Inertia::render('scripts/index', [
            'scripts' => $scripts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        $movies = Movie::select('id', 'title')->orderBy('title')->get();
        $artists = Artist::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('scripts/create', [
            'movies' => $movies,
            'artists' => $artists,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = request()->validate([
            'title' => ['string', 'required', 'max:255'],
            'content' => ['string', 'required', 'min:255'],
            'movie_id' => ['required', 'integer', 'exists:movies,id'],
            'artist_id' => ['required', 'integer', 'exists:artists,id'],
        ]);

        Script::create($validated);

        return redirect('/scripts');
    }

    /**
     * Display the specified resource.
     */
    public function show(Script $script)
    {
        return Inertia::render('scripts/show', [
            'script' => $script->load(['movie:id,title', 'artist:id,name']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Script $script)
    {
        $movies = Movie::select('id', 'title')->orderBy('title')->get();
        $artists = Artist::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('scripts/edit', [
            'script' => $script->load(['movie:id,title', 'artist:id,name']),
            'movies' => $movies,
            'artists' => $artists,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Script $script)
    {
        $validated = request()->validate([
            'title' => ['string', 'required', 'max:255'],
            'content' => ['string', 'required', 'min:255'],
            'movie_id' => ['required', 'integer', 'exists:movies,id'],
            'artist_id' => ['required', 'integer', 'exists:artists,id'],
        ]);

        $script->update($validated);

        return redirect("/scripts/{$script->id}");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Script $script)
    {
        $script->delete();

        return redirect('/scripts');
    }
}
