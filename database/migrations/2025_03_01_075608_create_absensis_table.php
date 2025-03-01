<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('absensi', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal');
            $table->time('jam_masuk');
            $table->time('jam_keluar');
            $table->string('foto')->nullable();
            $table->unsignedBigInteger('jadwal_piket');
            $table->text('kegiatan')->nullable();
            $table->unsignedBigInteger('periode_piket_id');
            $table->foreign('jadwal_piket')->references('id')->on('jadwal_piket')->onDelete('cascade');
            $table->foreign('periode_piket_id')->references('id')->on('periode_piket')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('absensi');
    }
};