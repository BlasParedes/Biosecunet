
@extends('admin.templates.main')

@section('title','Mostrar Permisos')

@section('content')


@section('section_title', 'Permisologia')
  <div class="row">
          <div class="col-xs-12" style="text-align: center;"> 
            Permisos otorgados al usuario: {{$usuario->Nb_Usuario}} dados sus roles:
          </div>
        </div>  <br/>
<table class="table table-striped">
  <thead>
    <th>Rol</th>
    <th>Modulo</th>
    <th>Status Insertar</th>
    <th>Status Modificar</th>
    <th>Status Consultar</th>
    <th>Status Eliminar</th>
  </thead>
  <tbody>
    @foreach($roles as $rol)
    @foreach($rol->modulos_rol as $modulo_rol)
    <tr>
      <td>{{$rol->Nb_Rol}}</td>
      <td>{{$modulo_rol->modulo->Nb_Modulo}}</td>
      <td>{{$modulo_rol->St_Insertar}}</td>
      <td>{{$modulo_rol->St_Modificar}}</td> 
      <td>{{$modulo_rol->St_Consultar}}</td>
      <td>{{$modulo_rol->St_Eliminar}}</td>       
    </tr>
    @endforeach
    @endforeach
  </tbody>
</table>



@endsection