<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><h2 class="text-primary" style="font-weight:bold; text-align: center; ">    Ingreso al Sistema</h2></div>

                <div class="card-body">
                <center>
                    <form method="POST" action="<?php echo e(route('login')); ?>">
                        <?php echo csrf_field(); ?>
                            <br/>
                        <div class="form-group row">
                            <label  for="email" class="col-md-6 col-form-label"> Usuario</label>

                            <div class="col-md-4 col-md-pull-2">
                                <input id="email" type="text" class="form-control<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" name="email" value="<?php echo e(old('email')); ?>" required autofocus>

                                <?php if($errors->has('email')): ?>
                                    <span class="invalid-feedback">
                                        <strong><?php echo e($errors->first('email')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-6 col-form-label">&nbsp&nbsp&nbsp&nbsp Contraseña</label>

                            <div class="col-md-4 col-md-pull-2 ">
                                <input id="password" type="password" class="form-control<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password" required>

                                <?php if($errors->has('password')): ?>
                                    <span class="invalid-feedback">
                                        <strong><?php echo e($errors->first('password')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>

                      

                        <div class="form-group row mb-4">
                            <div class="col-md-8 col-md-push-2">
                                <button type="submit" class="btn btn-primary">
                                    Ingresar
                                </button>

                               
                            </div>
                        </div>
                    </form>
                    </center>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.templates.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>