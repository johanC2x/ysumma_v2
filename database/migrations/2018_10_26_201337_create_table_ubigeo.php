<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableUbigeo extends Migration
{
/**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('ubigeo', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ubigeo');
            $table->string('distrito');
            $table->string('provincia');
            $table->string('departamento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('ubigeo');
    }
}
