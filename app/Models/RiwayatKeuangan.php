<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RiwayatKeuangan extends Model
{
    protected $fillable = ['tanggal', 'nominal', 'jenis', 'deskripsi', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}