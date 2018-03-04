<?php $__env->startSection('title','Editar Persona'); ?>
<?php $__env->startSection('style'); ?>


  <style>
          .thumb {
            height: 150px;
            border: 1px solid #000;
            margin: 10px 5px 0 0;
          }
        </style>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>



<ul>
<?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
  <br>  
<div class="alert alert-danger" role="alert">
		<li><?php echo e($error); ?></li>
	</div>

  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

	</ul>
	


			<br>	


<?php echo Form::model($persona, array('route' => array('imagenes.update', $persona->Co_Identificacion), 'method' => 'PUT','files' => true)); ?>




<div class="row">


<div class="form-group">

<?php echo Form::label('Nb_Nombre1','Nombre',['class'=>'col-sm-2 control-label']); ?>	
 <div class="col-sm-6 col-md-pull-1">
<?php echo Form::text('Nb_Nombre1',$persona->Nb_Nombre1,['class' =>'form-control','disabled']); ?>	
</div>
</div>


</div>
<br>
          
<div class="row">
<div class="form-group">
 
<?php echo Form::label('Nb_Apellido1','Apellido',['class'=>'col-sm-2 control-label']); ?>	
 <div class="col-sm-6 col-md-pull-1">
<?php echo Form::text('Nb_Apellido1',$persona->Nb_Apellido1,['class' =>'form-control','disabled']); ?>	
</div>
</div>
      </div>
      <br/>

      <div class="row">
<div class="form-group">

<?php echo Form::label('Co_Identificacion','Cedula',['class'=>'col-sm-2 control-label']); ?>	
 <div class="col-sm-6 col-md-pull-1">
<?php echo Form::text('Co_Identificacion',$persona->Co_Identificacion,['class' =>'form-control','disabled']); ?>	
</div>
</div>
</div>
<br/>
     <div class="row"> 

<div class="form-group">
<label for="image" class="col-sm-2 control-label">

Imagen

</label>  

  <div class="col-sm-10 col-md-pull-1">
<input name="image" type="file" accept="image/png, .jpeg, .jpg">  
</div>
</div>
</div>
<br/>
<div class="row">

<div class="form-group">
  <div class="col-sm-offset-1 col-sm-10">
<?php echo Form::submit('Registrar Imagen',['class' =>'btn btn-primary']); ?>	

</div>
</div>
</div>

 <div class="span8">
   <output id="list"></output>
   </div>
 
  
<br/>




<?php echo Form::close(); ?>


<?php $__env->stopSection(); ?>

     <?php $__env->startSection('script'); ?>
        <script>
              function archivo(evt) {
                  var files = evt.target.files; // FileList object
             
                  // Obtenemos la imagen del campo "file".
                  for (var i = 0, f; f = files[i]; i++) {
                    //Solo admitimos imágenes.
                    if (!f.type.match('image.*')) {
                        continue;
                    }
             
                    var reader = new FileReader();
             
                    reader.onload = (function(theFile) {
                        return function(e) {
                          // Insertamos la imagen
                         document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                        };
                    })(f);
             
                    reader.readAsDataURL(f);
                  }
              }
             
              document.getElementById('image').addEventListener('change', archivo, false);
      </script>

      <?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>