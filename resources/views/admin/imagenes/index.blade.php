
@extends('admin.templates.main')

@section('title','Mostrar Imagenes')

@section('content')

  <a href="{{route('imagenes.edit',$persona->Co_Identificacion)}}" class="btn btn-primary">Agregar Nueva Imagen</a><hr>
<div class="row">
      <div class="col-sm-12" style="text-align: center;"><h3 class="text-primary"><b>Galeria de Imagenes:</b></h3></div>
   <br/>
<div class="col-sm-12" style="text-align: center;">

<h4>  <b>   {{ $persona->Nb_Nombre1}} {{ $persona->Nb_Apellido1}} CI: {{ $persona->Co_Identificacion}}</b></h4>  

</div>
</div>
<div class="row">
@foreach($imagenes as $image)
  <div class="col-md-4">
   <br/> 
    <div class="panel panel-default">

      <div class="panel-body">
                 <img src="/biosecunet/public{{$image->Tx_Url}}" class="img-responsive">   
      </div>
     <div class="panel-footer">
         <a href="{{route('admin.imagenes.destroy',$image->Co_Imagen)}}" onclick="return confirm('¿Seguro que deseas eliminar la imagen?')" class="btn btn-danger">  <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
      </div>
    </div>
  </div>
  @endforeach
</div>
@endsection