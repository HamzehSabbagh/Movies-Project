<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    protected $fillable = ['title', 'content', 'artist_id','movie_id'];

    public function artist(){
        return $this->belongsTo(Artist::class);
    }

    public function movie(){
        return $this->belongsTo(Movie::class);
    }
}
