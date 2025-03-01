<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aset extends Model
{
    protected $fillable = ['nama', 'deskripsi', 'jumlah', 'laboratorium_id'];

    public function laboratorium()
    {
        return $this->belongsTo(Laboratorium::class);
    }

    public function detailAset()
    {
        return $this->hasMany(DetailAset::class);
    }
}