<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Persona;
use Illuminate\Support\Facades\DB;
use App\Pais;

class PaisesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personas = DB::table('m300_persona')
        ->join('d070_pais','Co_Pais_Nacionalidad','=','Co_Pais')
        ->select('Nb_Nombre1', 'Nb_Nombre2', 'Nb_Apellido1', 'Nb_Apellido2', 'Co_Persona', 'Nb_Nacionalidad')
        ->get();
        return view('admin.paises.create')->with('personas',$personas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $paises = Pais::all();
        $pais = array();
        foreach ($paises as $p) {
            if( $p->Co_Pais != 99 )
            $pais[$p->Co_Pais] = $p->Nb_Pais;
        }

        $persona = Persona::find($id);
        return view('admin.paises.edit')->with('persona', $persona)->with('paises',$pais);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $persona = Persona::find($id);
        $persona->fill($request->all());
        $persona->save();
        return redirect()->route('paises.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
