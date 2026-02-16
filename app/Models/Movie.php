<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Movie extends Model
{
    protected $fillable = ['title', 'description', 'release_date', 'category_id'];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function artists(){
        return $this->belongsToMany(Artist::class);
    }
}
