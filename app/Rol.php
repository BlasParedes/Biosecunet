<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $table = "d020_rol";
    protected $primaryKey = 'Co_Rol';
     public $incrementing = false;

    protected $fillable = ['Co_Rol','Nb_Rol', 'St_Rol', 'Fe_Status'];

    public function usuarios(){
    	return $this->belongsToMany('App\User','m050_usuario_rol', 'Co_Rol', 'Co_Usuario');
    }

    public function modulos(){
    	return $this->belongsToMany('App\Modulo','d030_modulo_rol', 'Co_Rol', 'Co_Modulo');
    }

    public function modulos_rol(){
        return $this->hasMany('App\Modulo_Rol', 'Co_Rol');
    }
}
