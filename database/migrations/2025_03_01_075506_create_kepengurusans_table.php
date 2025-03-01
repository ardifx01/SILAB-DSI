<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('kepengurusan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('struktur_id');
            $table->unsignedBigInteger('tahun_kepengurusan_id');
            $table->unsignedBigInteger('koor');
            $table->string('sk')->nullable();
            $table->foreign('struktur_id')->references('id')->on('struktur')->onDelete('cascade');
            $table->foreign('tahun_kepengurusan_id')->references('id')->on('tahun_kepengurusan')->onDelete('cascade');
            $table->foreign('koor')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('kepengurusan');
    }
};