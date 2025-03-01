<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Praktikum extends Model
{
    protected $fillable = ['mata_kuliah', 'kepengurusan_id', 'jadwal_id'];

    public function kepengurusan()
    {
        return $this->belongsTo(Kepengurusan::class);
    }

    public function jadwal()
    {
        return $this->belongsTo(JadwalPraktikum::class);
    }

    public function modulPraktikum()
    {
        return $this->hasMany(ModulPraktikum::class);
    }
}