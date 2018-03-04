<?php $__env->startSection('title', 'Asignar Nacionalidad'); ?>

<?php $__env->startSection('section_title', 'Asignar la Nacionalidad de la persona'); ?>

<?php $__env->startSection('content'); ?>	
	<?php echo Form::open(['route' => ['paises.update', $persona], 'method' => 'PUT']); ?>

		<div class="col-xs-6">
			<div class="form-group">
				<?php echo Form::label('Nombre', 'Primer nombre:'); ?>

				<?php echo Form::text('Nombre', $persona->Nb_Nombre1, ['class' => 'form-control', 'disabled', 'required']); ?>

			</div>
		</div>
		<div class="col-xs-6">
			<div class="form-group">
				<?php echo Form::label('Nombre', 'Segundo nombre:'); ?>

				<?php echo Form::text('Nb_Nombre2', $persona->Nb_Nombre2, ['class' => 'form-control', 'disabled', 'required']); ?>

			</div>
		</div>
		<div class="col-xs-6">
			<div class="form-group">
				<?php echo Form::label('Nombre', 'Primer apellido:'); ?>

				<?php echo Form::text('Nb_Apellido1', $persona->Nb_Apellido1, ['class' => 'form-control', 'disabled', 'required']); ?>

			</div>
		</div>
		<div class="col-xs-6">
			<div class="form-group">
				<?php echo Form::label('Nombre', 'Segundo Apellido:'); ?>

				<?php echo Form::text('Nb_Apellido2', $persona->Nb_Apellido2, ['class' => 'form-control', 'disabled', 'required']); ?>

			</div>
		</div>
		<div class="col-xs-8">
			<div class="form-group">
				<?php echo Form::label('Nombre', 'País:'); ?>

				<?php echo e(Form::select('Co_Pais_Nacionalidad', $paises, $persona->Co_Pais_Nacionalidad, [ 'class' => 'form-control' ])); ?>

			</div>
		</div>
		<div class="col-xs-8">
			<div class="form-group">
				<?php echo Form::submit('Guardar edicion', ['class' => 'btn btn-primary']); ?>		
			</div>
		</div>
	<?php echo Form::close(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>