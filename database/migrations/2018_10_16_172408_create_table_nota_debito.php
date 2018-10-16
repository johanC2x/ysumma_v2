<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableNotaDebito extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('nota_debito', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nro_doc');
            $table->string('serie');
            $table->string('id_cond_pago');
            $table->date('fec_emi');
            $table->date('fec_venc');
            $table->string('id_form_pago');
            $table->string('nro_ord_com');
            $table->string('id_moneda');
            $table->text('items')->nullable();
            $table->double('tipo_cambio', 8, 2);
            $table->string('id_tipo_guia')->nullable();
            $table->string('nro_guia')->nullable();
            $table->text('descripcion_guia')->nullable();
            $table->string('tipo_doc')->nullable();
            $table->string('id_tipo_motivo')->nullable();
            $table->string('sustento')->nullable();
            $table->integer('cliente_id')->unsigned();         
            $table->foreign('cliente_id')->references('id')->on('clientes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('nota_debito');
    }
}
