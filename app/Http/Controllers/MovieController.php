<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Models\Category;
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

        return Inertia::render('movies/create', [
            'categories' => $categories,
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
        ]);

        Movie::create($validated);
        
        return redirect('/movies');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        //
    }
}
