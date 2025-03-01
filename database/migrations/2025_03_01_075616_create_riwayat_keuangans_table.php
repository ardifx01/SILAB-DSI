<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('riwayat_keuangan', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal');
            $table->integer('nominal');
            $table->enum('jenis', ['masuk', 'keluar']);
            $table->string('deskripsi');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('riwayat_keuangan');
    }
};