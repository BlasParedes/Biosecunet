<?php $__env->startSection('title', 'Mostrar personas x pais'); ?>

<?php $__env->startSection('section_title', 'Personas por Nacionalidad'); ?>

<?php $__env->startSection('content'); ?>	
	<div class="col-xs-12">
		<table class="table table-striped">
			<thead>
				<th>ID</th>
				<th>Nombre</th>
				<th>Nacionalidad</th>
				<th>Editar Nacionalidad</th>
			</thead>
			<tbody>			
				<?php $__currentLoopData = $personas; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $persona): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<tr>
						<td><?php echo e($persona->Co_Persona); ?></td>
						<td><?php echo e($persona->Nb_Nombre1 ." ". $persona->Nb_Nombre2 . " " . $persona->Nb_Apellido1 . " " . $persona->Nb_Apellido2); ?></td>
						<td><?php echo e($persona->Nb_Nacionalidad); ?>				
						</td>
						<td>
							<a href="<?php echo e(route('paises.edit',$persona->Co_Persona)); ?>" class="btn btn-warning" onclick="return confirm('¿Desea editar la nacionalidad de <?php echo e($persona->Nb_Nombre1 ." ". $persona->Nb_Nombre2); ?>?')">
								<span class="glyphicon glyphicon-pencil"></span>
							</a>
						</td>
					</tr>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>			
			</tbody>
		</table>
		
	</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>