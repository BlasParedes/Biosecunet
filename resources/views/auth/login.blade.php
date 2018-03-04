
@extends('admin.templates.main')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><h2 class="text-primary" style="font-weight:bold; text-align: center; ">    Ingreso al Sistema</h2></div>

                <div class="card-body">
                <center>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                            <br/>
                        <div class="form-group row">
                            <label  for="email" class="col-md-6 col-form-label"> Usuario</label>

                            <div class="col-md-4 col-md-pull-2">
                                <input id="email" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-6 col-form-label">&nbsp&nbsp&nbsp&nbsp Contraseña</label>

                            <div class="col-md-4 col-md-pull-2 ">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
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
@endsection
