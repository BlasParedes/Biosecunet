<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profesion extends Model
{
    protected $table = "d100_profesion";
    protected $primaryKey = 'Co_Profesion';
     public $incrementing = false;

    protected $fillable = ['Co_Profesion','Nb_Profesion'];

    public function personas(){
        return $this->hasMany('App\Persona', 'Co_Profesion');
    }
}
