<?php

namespace App\Http\Middleware;
use App\Modulo_Rol;
use Closure;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Auth;
class Gestion_Nacionalidad
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
       public function handle($request, Closure $next)
    {
        $user = Auth::user();
        
       
        foreach($user->roles as $rol){
            
            foreach ($rol->modulos_rol as $modulo_rol) {
                 if($modulo_rol->Co_Modulo==11){
                                if($modulo_rol->St_Insertar=='A' && $modulo_rol->St_Modificar=='A' && $modulo_rol->St_Consultar=='A' && $modulo_rol->St_Eliminar=='A' && $modulo_rol->St_Modulo_Rol=='A'){
                                     return $next($request);
                                }
                }
            }

           
        }
        
          return response(view('denegado'));
          
        }
    }
