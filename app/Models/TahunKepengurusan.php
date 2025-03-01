<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TahunKepengurusan extends Model
{
    protected $fillable = ['tahun', 'isactive'];

    public function kepengurusan()
    {
        return $this->hasMany(Kepengurusan::class);
    }
}