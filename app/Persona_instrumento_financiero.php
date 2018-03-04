<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona_instrumento_financiero extends Model
{
    protected $table = "m360_persona_intrumento_financiero";

    protected $fillable = ['Co_Persona', 'Co_Entidad_Financiera', 'Co_Tipo_Instrumento', 'Co_Seguridad', 'Fe_Vencimiento'];
    public function personas(){
    	return $this->belongsTo('App\Persona');
    }

    public function entidad_financiera(){
    	return $this->belongsTo('App\Entidad_Financiera');
    }
}
