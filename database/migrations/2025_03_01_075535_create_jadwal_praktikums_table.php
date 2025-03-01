<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('jadwal_praktikum', function (Blueprint $table) {
            $table->id();
            $table->string('kelas');
            $table->time('jam_mulai');
            $table->time('jam_selesai');
            $table->string('ruangan');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('jadwal_praktikum');
    }
};