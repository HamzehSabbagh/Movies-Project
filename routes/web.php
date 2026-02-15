<?php

use App\Http\Controllers\MovieController;
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

Route::resource('movies',MovieController::class);