<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tablet extends Model
{
    public function truck()
    {
        return $this->belongsTo('App\Truck');
    }
    
    public function transactions()
    {
        return $this->hasMany('App\Transaction')->orderBy('id', 'desc');
    }
}
