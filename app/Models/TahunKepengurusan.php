<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TahunKepengurusan extends Model
{
    protected $table = 'tahun_kepengurusan'; 
    protected $fillable = ['tahun', 'isactive', 'mulai', 'selesai'];

    public function kepengurusan()
    {
        return $this->hasMany(Kepengurusan::class);
    }
}