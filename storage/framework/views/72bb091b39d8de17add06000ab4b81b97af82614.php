<?php $__env->startSection('title','Acceso Denegado'); ?>

<?php $__env->startSection('content'); ?>
<center>
<div class="col-sm-10 col-sm-offset-1">
<span style="font-size: 150px; color:#02399E" class="glyphicon glyphicon-lock" aria-hidden="true"></span>
</div>
<div class="col-sm-5 col-sm-offset-3"><h3 style="font-weight:bold;">&nbsp &nbsp Acceso Denegado</h3>
</div>
</center>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>