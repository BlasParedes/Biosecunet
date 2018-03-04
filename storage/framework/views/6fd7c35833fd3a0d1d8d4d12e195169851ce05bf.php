<?php $__env->startSection('title','Mostrar Imagenes'); ?>

<?php $__env->startSection('content'); ?>

  <a href="<?php echo e(route('imagenes.edit',$persona->Co_Identificacion)); ?>" class="btn btn-primary">Agregar Nueva Imagen</a><hr>
<div class="row">
      <div class="col-sm-12" style="text-align: center;"><h3 class="text-primary"><b>Galeria de Imagenes:</b></h3></div>
   <br/>
<div class="col-sm-12" style="text-align: center;">

<h4>  <b>   <?php echo e($persona->Nb_Nombre1); ?> <?php echo e($persona->Nb_Apellido1); ?> CI: <?php echo e($persona->Co_Identificacion); ?></b></h4>  

</div>
</div>
<div class="row">
<?php $__currentLoopData = $imagenes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $image): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
  <div class="col-md-4">
   <br/> 
    <div class="panel panel-default">

      <div class="panel-body">
                 <img src="/biosecunet/public<?php echo e($image->Tx_Url); ?>" class="img-responsive">   
      </div>
     <div class="panel-footer">
         <a href="<?php echo e(route('admin.imagenes.destroy',$image->Co_Imagen)); ?>" onclick="return confirm('¿Seguro que deseas eliminar la imagen?')" class="btn btn-danger">  <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
      </div>
    </div>
  </div>
  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>