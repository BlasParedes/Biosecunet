<?php $__env->startSection('title','Buscar Persona'); ?>

<?php $__env->startSection('content'); ?>

<center>

<?php $__env->startSection('section_title', 'Ingrese Cedula de la persona'); ?>
<?php echo Form::open(['url' => 'admin/personas/buscar', 'method' => 'POST']); ?>


<div class="form-group col-md-5 col-md-push-3">

<?php echo Form::text('Co_Identificacion',null,['class' =>'form-control ','placeholder' =>'Cedula','requiered']); ?>	
</div>

<div class="form-group">
<?php echo Form::submit('Buscar',['class' =>'btn btn-primary']); ?>	
</div>
	</center>
<?php echo Form::close(); ?>

<br/>
<br/>
<br/>
<br/>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>