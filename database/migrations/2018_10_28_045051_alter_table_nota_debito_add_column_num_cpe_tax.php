<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableNotaDebitoAddColumnNumCpeTax extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::table('nota_debito', function($table) {
            $table->string('num_cpe_tax')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::table('nota_debito', function($table) {
            $table->dropColumn('num_cpe_tax');
        });
    }
}
