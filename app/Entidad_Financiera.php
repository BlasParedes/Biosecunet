<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entidad_Financiera extends Model
{
    protected $table = "d110_entidad_financiera";

    protected $fillable = ['Nb_Entidad_Financiera'];
}
public function Persona_Instrumento_Financiero(){
	return $this->hasMany('App\Persona_instrumento_financiero'); 
}
