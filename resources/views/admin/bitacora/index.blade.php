
@extends('admin.templates.main')

@section('title','Reporte Bitacora')

@section('content')


@section('section_title', 'Bitacora')
   <br/>
<table class="table table-striped">
  <thead>
    <th>Modulo</th>
    <th>Usuario</th>
    <th>Rol</th>
    <th>Fecha de Ejecucion</th>
    <th>Status de Sentencia</th>
    <th>Sentencia</th>
  </thead>
  <tbody>
    @foreach($bitacoras as $bitacora)
   
    <tr>
      <td>{{$bitacora->modulo_rol->modulo->Nb_Modulo}}</td>
      <td>{{$bitacora->usuario_rol->usuario->Nb_Usuario}}</td>
      <td>{{$bitacora->usuario_rol->rol->Nb_Rol}}</td>
      <td>{{$bitacora->Fe_Ejecucion}}</td> 
      <td>{{$bitacora->St_Sentencia}}</td>
      <td>{{$bitacora->Tx_Sentencia}}</td>       
    </tr>
 
    @endforeach
  </tbody>
</table>



@endsection