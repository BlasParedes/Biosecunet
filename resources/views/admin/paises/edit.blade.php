@extends('admin.templates.main')

@section('title', 'Asignar Nacionalidad')

@section('section_title', 'Asignar la Nacionalidad de la persona')

@section('content')	
	{!! Form::open(['route' => ['paises.update', $persona], 'method' => 'PUT']) !!}
		<div class="col-xs-6">
			<div class="form-group">
				{!! Form::label('Nombre', 'Primer nombre:') !!}
				{!! Form::text('Nombre', $persona->Nb_Nombre1, ['class' => 'form-control', 'disabled', 'required']) !!}
			</div>
		</div>
		<div class="col-xs-6">
			<div class="form-group">
				{!! Form::label('Nombre', 'Segundo nombre:') !!}
				{!! Form::text('Nb_Nombre2', $persona->Nb_Nombre2, ['class' => 'form-control', 'disabled', 'required']) !!}
			</div>
		</div>
		<div class="col-xs-6">
			<div class="form-group">
				{!! Form::label('Nombre', 'Primer apellido:') !!}
				{!! Form::text('Nb_Apellido1', $persona->Nb_Apellido1, ['class' => 'form-control', 'disabled', 'required']) !!}
			</div>
		</div>
		<div class="col-xs-6">
			<div class="form-group">
				{!! Form::label('Nombre', 'Segundo Apellido:') !!}
				{!! Form::text('Nb_Apellido2', $persona->Nb_Apellido2, ['class' => 'form-control', 'disabled', 'required']) !!}
			</div>
		</div>
		<div class="col-xs-8">
			<div class="form-group">
				{!! Form::label('Nombre', 'País:') !!}
				{{ Form::select('Co_Pais_Nacionalidad', $paises, $persona->Co_Pais_Nacionalidad, [ 'class' => 'form-control' ]) }}
			</div>
		</div>
		<div class="col-xs-8">
			<div class="form-group">
				{!! Form::submit('Guardar edicion', ['class' => 'btn btn-primary']) !!}		
			</div>
		</div>
	{!! Form::close() !!}
@endsection