<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrucksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trucks', function (Blueprint $table) {
            $table->id();
            $table->string('organization');
            $table->string('license_plate');
            $table->string('manufacturer');
            $table->string('model');
            $table->string('owner_operator');
            $table->string('vehicle_axles');
            $table->string('status');
            $table->string('tgit');
            $table->string('vehicle_type');
            $table->string('vin');
            $table->string('vehicle_id');
            $table->string('year');
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
        Schema::dropIfExists('trucks');
    }
}
