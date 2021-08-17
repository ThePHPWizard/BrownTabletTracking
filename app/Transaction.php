<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    public function truck()
    {
        return $this->belongsTo('App\Truck');
    }
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
    public function tablet()
    {
        return $this->belongsTo('App\Tablet');
    }
}
