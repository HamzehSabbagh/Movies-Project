<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ScriptController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/about', function(){
    return Inertia::render('about');
});

Route::get('/contact', function(){
    return Inertia::render('contact');
});

Route::get('/guest', function () {
    return Inertia::render('guest-home');
})->middleware('guest')->name('guest.home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $role = request()->user()?->role?->name;

        if ($role === 'admin') {
            return redirect()->route('admin.home');
        }

        return redirect()->route('user.home');
    })->name('dashboard');
});

Route::get('/user', function () {
    return Inertia::render('user-home');
})->middleware(['auth', 'verified', 'role:user'])->name('user.home');

Route::get('/admin', function () {
    return Inertia::render('admin-home');
})->middleware(['auth', 'verified', 'role:admin'])->name('admin.home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('movies', MovieController::class)->only(['index', 'show']);
Route::resource('categories', CategoryController::class)->only(['index', 'show']);
Route::resource('scripts', ScriptController::class)->only(['index', 'show']);
Route::resource('artists', ArtistController::class)->only(['index', 'show']);

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('movies', MovieController::class)->except(['index', 'show']);
    Route::resource('categories', CategoryController::class)->except(['index', 'show']);
    Route::resource('scripts', ScriptController::class)->except(['index', 'show']);
    Route::resource('artists', ArtistController::class)->except(['index', 'show']);
});
