<?php $__env->startSection('title','Reporte Bitacora'); ?>

<?php $__env->startSection('content'); ?>


<?php $__env->startSection('section_title', 'Bitacora'); ?>
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
    <?php $__currentLoopData = $bitacoras; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bitacora): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
   
    <tr>
      <td><?php echo e($bitacora->modulo_rol->modulo->Nb_Modulo); ?></td>
      <td><?php echo e($bitacora->usuario_rol->usuario->Nb_Usuario); ?></td>
      <td><?php echo e($bitacora->usuario_rol->rol->Nb_Rol); ?></td>
      <td><?php echo e($bitacora->Fe_Ejecucion); ?></td> 
      <td><?php echo e($bitacora->St_Sentencia); ?></td>
      <td><?php echo e($bitacora->Tx_Sentencia); ?></td>       
    </tr>
 
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
  </tbody>
</table>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>