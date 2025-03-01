<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JadwalPiket extends Model
{
    protected $fillable = ['hari', 'kepengurusan_id', 'user_id'];

    public function kepengurusan()
    {
        return $this->belongsTo(Kepengurusan::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function absensi()
    {
        return $this->hasMany(Absensi::class);
    }
}