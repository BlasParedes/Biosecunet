
@extends('admin.templates.main')

@section('title','Buscar Persona')

@section('content')
<center>
@section('section_title', 'Ingrese Cedula de la persona')

{!! Form::open(['url' => 'admin/imagenes/buscar', 'method' => 'POST']) !!}

<div class="form-group col-md-5 col-md-push-3">

{!! Form::text('Co_Identificacion',null,['class' =>'form-control ','placeholder' =>'Cedula','requiered']) !!}	
</div>

<div class="form-group">
{!! Form::submit('Buscar',['class' =>'btn btn-primary']) !!}	
</div>
	</center>
{!! Form::close() !!}
<br/>
<br/>
<br/>
<br/>

@endsection