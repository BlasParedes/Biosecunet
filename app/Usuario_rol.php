<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario_rol extends Model
{
    protected $table = "m050_usuario_rol";

    protected $primaryKey = 'Co_Usuario';

    protected $fillable = ['Co_Usuario', 'Co_Rol', 'St_Rol_Usuario', 'Fe_Status'];

    public function usuario(){
    	return $this->belongsTo('App\User','Co_Usuario');
    }

    public function rol(){
    	return $this->belongsTo('App\Rol','Co_Rol');
    }

    public function bitacoras(){
    	return $this->hasMany('App\Bitacora','Co_Usuario');
    }
}
