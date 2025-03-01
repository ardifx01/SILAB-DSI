<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('program_kerja', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kepengurusan_id');
            $table->string('program_kerja');
            $table->foreign('kepengurusan_id')->references('id')->on('kepengurusan')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('program_kerja');
    }
};