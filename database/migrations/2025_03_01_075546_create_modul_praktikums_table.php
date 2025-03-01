<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('modul_praktikum', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('praktikum_id');
            $table->string('judul');
            $table->string('modul');
            $table->foreign('praktikum_id')->references('id')->on('praktikum')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('modul_praktikum');
    }
};