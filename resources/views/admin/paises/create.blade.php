@extends('admin.templates.main')

@section('title', 'Mostrar personas x pais')

@section('section_title', 'Personas por Nacionalidad')

@section('content')	
	<div class="col-xs-12">
		<table class="table table-striped">
			<thead>
				<th>ID</th>
				<th>Nombre</th>
				<th>Nacionalidad</th>
				<th>Editar Nacionalidad</th>
			</thead>
			<tbody>			
				@foreach( $personas as $persona )
					<tr>
						<td>{{ $persona->Co_Persona }}</td>
						<td>{{ $persona->Nb_Nombre1 ." ". $persona->Nb_Nombre2 . " " . $persona->Nb_Apellido1 . " " . $persona->Nb_Apellido2}}</td>
						<td>{{ $persona->Nb_Nacionalidad }}				
						</td>
						<td>
							<a href="{{ route('paises.edit',$persona->Co_Persona) }}" class="btn btn-warning" onclick="return confirm('¿Desea editar la nacionalidad de {{ $persona->Nb_Nombre1 ." ". $persona->Nb_Nombre2}}?')">
								<span class="glyphicon glyphicon-pencil"></span>
							</a>
						</td>
					</tr>
				@endforeach			
			</tbody>
		</table>
		
	</div>
@endsection