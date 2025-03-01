<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('detail_kepengurusan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kepengurusan_id');
            $table->unsignedBigInteger('anggota');
            $table->foreign('kepengurusan_id')->references('id')->on('kepengurusan')->onDelete('cascade');
            $table->foreign('anggota')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('detail_kepengurusan');
    }
};