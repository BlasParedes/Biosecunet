<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Modulo_rol extends Model
{
    protected $table = "d030_modulo_rol";
     protected $primaryKey = 'Co_Modulo';
 public $incrementing = false;
    protected $fillable = ['Co_Modulo', 'Co_Rol', 'St_Insertar', 'St_Modificar', 'St_Consultar', 'St_Eliminar', 'St_Modulo', 'Fe_Status'];
    
    public function rol(){
    	return $this->belongsTo('App\Rol','Co_Rol');
    }

    public function modulo(){
    	return $this->belongsTo('App\Modulo','Co_Modulo');
    }
    public function bitacoras(){
    	return $this->hasMany('App\Bitacora','Co_Modulo');
    }
}
