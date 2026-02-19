<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Artist;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::latest()->paginate(3);

        return Inertia::render('movies/index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        $artists = Artist::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('movies/create', [
            'categories' => $categories,
            'artists' => $artists,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = request()->validate([
            'title' => ['required', 'string', 'max:100'],
            'description' => ['string', 'min:3', 'nullable'],
            'release_date' => ['date', 'required'],
            'category_id' => ['integer' , 'required', 'exists:categories,id'],
            'artist_ids' => ['nullable', 'array'],
            'artist_ids.*' => ['integer', 'exists:artists,id']
        ]);

        $movie = Movie::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'release_date' => $validated['release_date'],
            'category_id' => $validated['category_id'],
        ]);

        $movie->artists()->sync($validated['artist_ids'] ?? []);

        return redirect('/movies');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        $movie->load('category', 'artists');

        return Inertia::render('movies/show', [
            'movie' => $movie,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        $movie->load(['category', 'artists']);
        $categories = Category::select('id', 'name')->get();
        $artists = Artist::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('movies/edit', [
            'movie' => $movie,
            'categories' => $categories,
            'artists' => $artists,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        $validated = request()->validate([
            'title' => ['required', 'string', 'max:100'],
            'description' => ['string', 'min:3', 'nullable'],
            'release_date' => ['date', 'required'],
            'category_id' => ['integer' , 'required', 'exists:categories,id'],
            'artist_ids' => ['nullable', 'array'],
            'artist_ids.*' => ['integer', 'exists:artists,id']
        ]);

        $movie->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'release_date' => $validated['release_date'],
            'category_id' => $validated['category_id'],
        ]);
            
        $movie->artists()->sync($validated['artist_ids'] ?? []);

        return redirect("/movies/{$movie->id}");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();

        return redirect('/movies');
    }
}
