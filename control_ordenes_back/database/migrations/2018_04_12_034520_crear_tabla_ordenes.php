<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaOrdenes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordenes', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->string('nota_recibido');
            $table->timestamp('fecha_recibido');
            $table->string('nota_entregado');
            $table->timestamp('fecha_entregado');
            $table->string('estado');
            $table->string('cedula_cliente');
            $table->double('costo');
            $table->string('firma');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ordenes');
    }
}
