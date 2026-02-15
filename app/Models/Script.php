<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    protected $fillable = ['title', 'content'];

    public function artist(){
        return $this->belongsTo(Artist::class);
    }
}
