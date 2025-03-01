<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('surat', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_surat');
            $table->date('tanggal_surat');
            $table->unsignedBigInteger('pengirim');
            $table->unsignedBigInteger('penerima');
            $table->string('perihal');
            $table->string('file')->nullable();
            $table->boolean('isread');
            $table->foreign('pengirim')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('penerima')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('surat');
    }
};