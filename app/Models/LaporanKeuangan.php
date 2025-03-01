<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LaporanKeuangan extends Model
{
    protected $fillable = ['bulan', 'kepengurusan', 'pemasukan', 'pengeluaran', 'saldo_akhir'];

    public function kepengurusan()
    {
        return $this->belongsTo(Kepengurusan::class, 'kepengurusan');
    }
}