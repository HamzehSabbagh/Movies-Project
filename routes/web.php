<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ScriptController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function(){
    return Inertia::render('about');
});

Route::get('/contact', function(){
    return Inertia::render('contact');
});

Route::get('/guest', function () {
    return Inertia::render('guest-home');
})->middleware('guest')->name('guest.home');

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function(){
        return Inertia::render('dashboard');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:user,admin'])->group(function(){
    Route::resource('movies', MovieController::class)
        ->only(['index', 'show'])
        ->where(['movie' => '[0-9]+']);
    Route::resource('categories', CategoryController::class)
        ->only(['index', 'show'])
        ->where(['category' => '[0-9]+']);
    Route::resource('scripts', ScriptController::class)
        ->only(['index', 'show'])
        ->where(['script' => '[0-9]+']);
    Route::resource('artists', ArtistController::class)
        ->only(['index', 'show'])
        ->where(['artist' => '[0-9]+']);
});


Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('movies', MovieController::class)
        ->except(['index', 'show'])
        ->where(['movie' => '[0-9]+']);
    Route::resource('categories', CategoryController::class)
        ->except(['index', 'show'])
        ->where(['category' => '[0-9]+']);
    Route::resource('scripts', ScriptController::class)
        ->except(['index', 'show'])
        ->where(['script' => '[0-9]+']);
    Route::resource('artists', ArtistController::class)
        ->except(['index', 'show'])
        ->where(['artist' => '[0-9]+']);
});

Route::get('/dashboard/image', function(Request $request){
    $user = $request->user();

    abort_unless($user, 404);

    if (! $user->image_blob) {
        return response()->file(public_path('images/default-avatar.svg'));
    }

    return response($user->image_blob)
        ->header('Content-Type', $user->image_mime ?? 'application/octet-stream');
})->middleware('auth')->name('dashboard.image');
