<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Persona;
use App\Persona_Imagen;
use App\Tipo_Imagen;
use App\Pais;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Laracasts\Flash\Flash;
class ImagenesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     return view('admin.imagenes.search');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    public function search(Request $request)
    {

          $personas= Persona::where('Co_Identificacion', $request->Co_Identificacion)->get();
        foreach ($personas as $persona) {
             $mis_imagenes= $persona->Persona_Imagen;
              return view('admin.imagenes.index')->with('persona',$persona)->with('imagenes',$mis_imagenes);
                
            }
              
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
           $personas= Persona::where('Co_Identificacion', $request->Co_Identificacion)->get();
        foreach ($personas as $person) {
                 return redirect()->route('imagenes.edit',$person->Co_Identificacion);
                
            }

     
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
       $personas= Persona::where('Co_Identificacion', $id)->get();
        foreach ($personas as $person) {

        return view('admin.imagenes.create')->with('persona',$person);}
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $Co_Identificacion)
    {
        $personas= Persona::where('Co_Identificacion', $Co_Identificacion)->get();
       
        foreach ($personas as $persona) {
            
          $validator = Validator::make($request->all(), [
                'image' => 'required|image|mimes:jpeg,jpg,png',
                ]);

        if ($validator->fails()) {


            return redirect('admin/imagenes/'.$persona->Co_Identificacion.'/edit')->with('persona',$persona)
                        ->withErrors($validator)
                        ->withInput();
        }
        if($request->file('image')){

        $file =$request->file('image');
        $name = 'imagen_'. $persona->Co_Identificacion.time() . '.' .  $file->getClientOriginalExtension();
        $path = public_path() . '/images/personas';
        $file->move($path,$name);

        }

    
        
        $Persona_Imagen= new Persona_Imagen;
        $Persona_Imagen->Co_Persona=$persona->Co_Persona;
        $Persona_Imagen->Co_Imagen=time();
        $Persona_Imagen->Co_Tipo_Imagen=$file->getClientOriginalExtension();
        $Persona_Imagen->Tx_Url='/images/personas/' .$name;
        $Persona_Imagen->save();
         flash('Imagen Guardada de forma exitosa')->warning()->important();
        $mis_imagenes= $persona->Persona_Imagen;
        return view('admin.imagenes.index')->with('persona',$persona)->with('imagenes',$mis_imagenes);
      }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
        $Persona_Imagen= Persona_Imagen::find($id);
        $Persona_Imagen->delete();
        $persona=$Persona_Imagen->persona;
        flash('Imagen borrada de forma exitosa')->error()->important();
        $mis_imagenes= $persona->Persona_Imagen;
        return view('admin.imagenes.index')->with('persona',$persona)->with('imagenes',$mis_imagenes);
    }
}
