<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    
    protected $table = "m040_usuario";
    protected $primaryKey = 'Co_Usuario';


    protected $fillable = ['Co_Persona', 'Nb_Usuario', 'password', 'St_Usuario', 'Fe_Status'];

    public function persona(){
        return $this->belongsTo('App\Persona','Co_Persona');
    }

    public function roles(){
        return $this->belongsToMany('App\Rol', 'm050_usuario_rol', 'Co_Usuario', 'Co_Rol');
    }

    public function ROL_EST(){

        $roles= $this->roles;
        foreach($roles as $rol){
            

                return $rol->Co_Rol === "ROL_EST";
         }
       
    }


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
