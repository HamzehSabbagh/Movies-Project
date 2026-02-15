<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['name', 'role'];

    public function movies(){
        return $this->belongsToMany(Movie::class);
    }

    public function scripts(){
        return $this->hasMany(Script::class);
    }
}
