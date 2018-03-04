<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bitacora extends Model
{
    protected $table = "t060_bitacora";
    protected $primaryKey = 'Co_Bitacora';

    protected $fillable = ['Co_Modulo', 'Co_Usuario', 'Co_Rol', 'Fe_Ejecucion', 'St_Sentencia', 'Tx_Sentencia', 'Tx_IP', 'Tx_Error', 'Tx_Tabla', 'Tx_Valor'];
    public function modulo_rol(){
    	return $this->belongsTo('App\Modulo_rol','Co_Modulo');
    }

    public function usuario_rol(){
    	return $this->belongsTo('App\Usuario_rol','Co_Usuario');
    }
}
