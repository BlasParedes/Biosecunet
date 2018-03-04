<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tipo_Imagen extends Model
{
    protected $table = "m320_persona_imagen";

    protected $fillable = ['Nb_Tipo_Imagen'];
    public function Personas_Imagen(){
    	return $this->hasMany('App\Persona_Imagen');
    }
}
