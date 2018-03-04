<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    protected $table = "d070_pais";
    protected $primaryKey = 'Co_Pais';

    protected $fillable = ['Nb_Pais', 'Nb_Nacionalidad'];
      public $incrementing = false;
    public $timestamps = false;

    public function persons(){
    	return $this->hasMany('App\Persona', 'Co_Pais_Nacionalidad');
    }
 	public function personas(){
    	return $this->hasMany('App\Persona');
    }

}
