<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artists = Artist::latest()->get();

        return Inertia::render('artists/index', [
            'artists' => $artists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $movies = Movie::select('id', 'title')->get();
        return Inertia::render('artists/create', [
            'movies' => $movies,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = request()->validate([
            'name' => ['string', 'required'],
            'role' => ['string', 'required'],
            'movie_ids' => ['array', 'nullable'],
            'movie_ids.*' => ['integer', 'exists:movies,id']
        ]);

        $artist = Artist::create([
            'name' => $validated['name'],
            'role' => $validated['role'],
        ]);
        $artist->movies()->sync($validated['movie_ids'] ?? []);

        return redirect('/artists');
    }

    /**
     * Display the specified resource.
     */
    public function show(Artist $artist)
    {
        return Inertia::render('artists/show', [
            'artist' => $artist->load('movies:id,title'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artist $artist)
    {
        $movies = Movie::select('id', 'title')->orderBy('title')->get();

        return Inertia::render('artists/edit', [
            'artist' => $artist->load('movies:id,title'),
            'movies' => $movies,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Artist $artist)
    {
        $validated = request()->validate([
            'name' => ['string', 'required'],
            'role' => ['string', 'required'],
            'movie_ids' => ['array', 'nullable'],
            'movie_ids.*' => ['integer', 'exists:movies,id']
        ]);

        $artist->update([
            'name' => $validated['name'],
            'role' => $validated['role'],
        ]);

        $artist->movies()->sync($validated['movie_ids'] ?? []);

        return redirect("/artists/{$artist->id}");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artist $artist)
    {
        $artist->delete();

        return redirect("/artists");
    }
}
