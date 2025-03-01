<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModulPraktikum extends Model
{
    protected $fillable = ['praktikum_id', 'judul', 'modul'];

    public function praktikum()
    {
        return $this->belongsTo(Praktikum::class);
    }
}