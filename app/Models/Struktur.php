<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Struktur extends Model
{
    protected $fillable = ['struktur', 'laboratorium_id'];

    public function laboratorium()
    {
        return $this->belongsTo(Laboratorium::class);
    }

    public function kepengurusan()
    {
        return $this->hasMany(Kepengurusan::class);
    }
}