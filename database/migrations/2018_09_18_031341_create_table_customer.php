<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCustomer extends Migration{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombres_completos');
            $table->string('nro_doc');
            $table->string('tipo_doc');
            $table->text('direccion')->nullable();
            $table->string('email')->nullable();
            $table->string('tipo_email')->nullable();
            $table->integer('edad')->nullable();
            $table->date('fec_nac')->nullable();
            $table->text('descripcion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('clientes');
    }

}
