<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Modulo extends Model
{
    protected $table = "d010_modulo";
     protected $primaryKey = 'Co_Modulo';
      public $incrementing = false;

    protected $fillable = ['Co_Funcional', 'Co_Tipo', 'Nu_Nivel', 'Nb_Modulo', 'Tx_Url', 'Tx_Version', 'Tx_Descripcion', 'St_Modulo', 'Fe_Status', 'Fe_Version'];
    public function roles(){
    	return $this->belongsToMany('App\Rol','d030_modulo_rol', 'Co_Modulo', 'Co_Rol');
    }

}
