
@extends('admin.templates.main')

@section('title','Mostrar Datos')

@section('content')


@section('section_title', 'Datos Personales')


<div class="row">
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
    <div class="col-xs-6">
      <div class="form-group">
        {!! Form::label('Cedula', 'Cedula:') !!}
        {!! Form::text('Cedula', $persona->Co_Identificacion, ['class' => 'form-control', 'disabled', 'required']) !!}
      </div>
    </div>
     <div class="col-xs-6">
      <div class="form-group">
        {!! Form::label('Profesion', 'Profesion:') !!}
        {!! Form::text('Profesion', $persona->profesion->Nb_Profesion, ['class' => 'form-control', 'disabled', 'required']) !!}
      </div>
    </div>
    <div class="col-xs-6">
      <div class="form-group">
        {!! Form::label('Direccion', 'Direccion:') !!}
        {!! Form::text('Direccion', $persona->Tx_Direccion, ['class' => 'form-control', 'disabled', 'required']) !!}
      </div>
    </div>
    <div class="col-xs-6">
      <div class="form-group">
        {!! Form::label('Correo', 'Correo:') !!}
        {!! Form::text('Correo', $persona->Tx_Email, ['class' => 'form-control', 'disabled', 'required']) !!}
      </div>
    </div>
</div>
@endsection