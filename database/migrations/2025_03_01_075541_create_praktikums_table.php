<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('praktikum', function (Blueprint $table) {
            $table->id();
            $table->string('mata_kuliah');
            $table->unsignedBigInteger('kepengurusan_id');
            $table->unsignedBigInteger('jadwal_id');
            $table->foreign('kepengurusan_id')->references('id')->on('kepengurusan')->onDelete('cascade');
            $table->foreign('jadwal_id')->references('id')->on('jadwal_praktikum')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('praktikum');
    }
};