<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    protected $fillable = ['tanggal', 'jam_masuk', 'jam_keluar', 'foto', 'jadwal_piket', 'kegiatan', 'periode_piket_id'];

    public function jadwalPiket()
    {
        return $this->belongsTo(JadwalPiket::class);
    }

    public function periodePiket()
    {
        return $this->belongsTo(PeriodePiket::class);
    }
}