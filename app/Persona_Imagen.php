<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona_Imagen extends Model
{
    protected $table = "m320_persona_imagen";
    protected $primaryKey = 'Co_Imagen';

    protected $fillable = ['Co_Persona','Co_Imagen' ,'Co_Tipo_Imagen', 'Tx_Url'];
    
    public function persona(){
    	return $this->belongsTo('App\Persona', 'Co_Persona');
    }
    public function Tipo_Imagen(){
    	return $this->belongsTo('App\Tipo_Imagen', 'Co_Tipo_Imagen');
    }
    public $timestamps = false;
}
