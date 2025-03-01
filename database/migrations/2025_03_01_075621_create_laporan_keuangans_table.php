<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('laporan_keuangan', function (Blueprint $table) {
            $table->id();
            $table->string('bulan');
            $table->unsignedBigInteger('kepengurusan');
            $table->integer('pemasukan');
            $table->integer('pengeluaran');
            $table->integer('saldo_akhir');
            $table->foreign('kepengurusan')->references('id')->on('kepengurusan')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('laporan_keuangan');
    }
};