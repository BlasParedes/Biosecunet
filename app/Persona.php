<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = "m300_persona";
    protected $primaryKey = 'Co_Persona';
    public $timestamps = false;
    protected $fillable = ['Co_Pais_Nacionalidad','Co_Pais_Direccion','Co_Estado_Direccion', 'Co_Municipio_Direccion', 'Co_Profesion', 'Co_Identificador', 'St_Nacionalidad', 'Co_Pasaporte','St_Comunidad', 'Co_Tipo_Persona','Co_Carnet','Nb_Apellido1','Nb_Apellido2','Nb_Nombre1','Nb_Nombre2','Co_Genero','Fe_Nacimiento','Nb_Lugar_Nacimiento','St_Civil','Nb_Grado_Instruccion','Tx_Direccion','Tx_Observacion','Tx_Oficio', 'Nu_Telefono_Fijo','Nu_Telefono_Movil','Tx_Email', 'St_Persona','Fe_Admision','Fe_Retiro'];


  	public function persona_imagen(){

    	return $this->hasMany('App\Persona_Imagen', 'Co_Persona'); 

    }
    public function usuarios(){
    	return $this->hasMany('App\Usuario');
    }
    public function persona_instrumento_financiero(){
    	return $this->hasMany('App\Persona_instrumento_financiero');
    }
    public function pais(){
    	return $this->belongsTo('App\Pais', 'Co_Pais_Nacionalidad');
    }

    public function profesion(){
        return $this->belongsTo('App\Profesion', 'Co_Profesion');
    }

     public function paises(){
        return $this->belongsTo('App\Pais');
    }
}
