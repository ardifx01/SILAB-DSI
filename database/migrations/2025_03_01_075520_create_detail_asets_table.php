<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('detail_aset', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('aset_id');
            $table->string('kode_barang');
            $table->enum('status', ['tersedia', 'dipinjam']);
            $table->enum('keadaan', ['baik', 'rusak']);
            $table->foreign('aset_id')->references('id')->on('aset')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('detail_aset');
    }
};