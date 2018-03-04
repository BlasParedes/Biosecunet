<?php $__env->startSection('title','Mostrar Datos'); ?>

<?php $__env->startSection('content'); ?>


<?php $__env->startSection('section_title', 'Datos Personales'); ?>


<div class="row">
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
    <div class="col-xs-6">
      <div class="form-group">
        <?php echo Form::label('Cedula', 'Cedula:'); ?>

        <?php echo Form::text('Cedula', $persona->Co_Identificacion, ['class' => 'form-control', 'disabled', 'required']); ?>

      </div>
    </div>
     <div class="col-xs-6">
      <div class="form-group">
        <?php echo Form::label('Profesion', 'Profesion:'); ?>

        <?php echo Form::text('Profesion', $persona->profesion->Nb_Profesion, ['class' => 'form-control', 'disabled', 'required']); ?>

      </div>
    </div>
    <div class="col-xs-6">
      <div class="form-group">
        <?php echo Form::label('Direccion', 'Direccion:'); ?>

        <?php echo Form::text('Direccion', $persona->Tx_Direccion, ['class' => 'form-control', 'disabled', 'required']); ?>

      </div>
    </div>
    <div class="col-xs-6">
      <div class="form-group">
        <?php echo Form::label('Correo', 'Correo:'); ?>

        <?php echo Form::text('Correo', $persona->Tx_Email, ['class' => 'form-control', 'disabled', 'required']); ?>

      </div>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>