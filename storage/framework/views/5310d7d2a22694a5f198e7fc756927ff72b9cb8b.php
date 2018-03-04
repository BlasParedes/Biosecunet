<?php $__env->startSection('title','Mostrar Permisos'); ?>

<?php $__env->startSection('content'); ?>


<?php $__env->startSection('section_title', 'Permisologia'); ?>
  <div class="row">
          <div class="col-xs-12" style="text-align: center;"> 
            Permisos otorgados al usuario: <?php echo e($usuario->Nb_Usuario); ?> dados sus roles:
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
    <?php $__currentLoopData = $roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $rol): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php $__currentLoopData = $rol->modulos_rol; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $modulo_rol): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <tr>
      <td><?php echo e($rol->Nb_Rol); ?></td>
      <td><?php echo e($modulo_rol->modulo->Nb_Modulo); ?></td>
      <td><?php echo e($modulo_rol->St_Insertar); ?></td>
      <td><?php echo e($modulo_rol->St_Modificar); ?></td> 
      <td><?php echo e($modulo_rol->St_Consultar); ?></td>
      <td><?php echo e($modulo_rol->St_Eliminar); ?></td>       
    </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
  </tbody>
</table>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>