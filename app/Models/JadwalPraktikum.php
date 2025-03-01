<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JadwalPraktikum extends Model
{
    protected $fillable = ['kelas', 'jam_mulai', 'jam_selesai', 'ruangan'];

    public function praktikum()
    {
        return $this->hasMany(Praktikum::class);
    }
}