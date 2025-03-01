<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramKerja extends Model
{
    protected $fillable = ['kepengurusan_id', 'program_kerja'];

    public function kepengurusan()
    {
        return $this->belongsTo(Kepengurusan::class);
    }
}