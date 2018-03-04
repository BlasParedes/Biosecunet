<!DOCTYPE html>
<html>
<head>
	@yield('style')
	<title>@yield('title', 'Default') | Administracion</title>
	<link rel="stylesheet" type="text/css" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('plugins/font-awesome/css/font-awesome.min.css') }}">


</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-2">
				<img src="{{ asset('images/logo-unet.png') }}" width="150" height="150" class="img-rounded" alt="Logo unet">

			</div>
			<div class="col-sm-6">
				Universidad Nacional Experimental del Tachira<br>Departamento de Ingenieria en Informatica<br>Sistemas de Informacion I

			</div>
			<div class="col-sm-1">
			<br/>
		
			
                        @guest
                          
                            
                        @else
                           		<span style="font-size: 53px; color:#133d87" class="glyphicon glyphicon-user" aria-hidden="true"></span>
                               </div>
                               <div class="col-sm-2">
                                    <h4 style="font-weight:bold;">{{ Auth::user()->Nb_Usuario }} </h4>
                                
									<p>   </p>
                               
                                    <a class="btn btn-primary btn-sm" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        <span style="font-weight:bold; color:white" class="glyphicon glyphicon-log-out" aria-hidden="true"> Salir</span>
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                            
                            
                        @endguest
                    
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12" style="text-align: center;"><h1 class="text-primary"><b>BioSec UNET</b></h1></div>
		</div>
		<div class="row">
			
				@include('admin.templates.partials.acordeon')
			
			<div class="col-sm-8" style="border: 2px solid #133d87">		
			<div class="row">
					<div class="col-xs-12" style="text-align: center;"> <h3 class="text-primary">
						@yield('section_title')
					</h3> </div>
				</div>			
				<section>
				<br/>
					@include('flash::message')
					@yield('content')
				</section>
			</div>
			
		</div>
		
	</div>
	<footer>
		<div class="row">
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
			<br>	
		</div>
		<div class="row">

		<center> 
		<a href="https://es-la.facebook.com/unetoficial" target="_blank" title="Facebook"><i  style="color:#133d87" class="fa fa-facebook-square fa-2x"></i></a>
			&nbsp;
		<a href="https://twitter.com/UNEToficial" target="_blank" title="Twitter"><i style="color:#133d87" class="fa fa-twitter-square fa-2x"></i></a>
			&nbsp;
		<a href="https://intranet.unet.edu.ve/" target="_blank" title="Intranet">
		<i  style="color:#133d87" class="fa fa-envelope-square fa-2x"></i></a>
		</center>
			
		</div>
		<div class="row">
			<div class="col-sm-12" style="text-align: center;">
				<p class="bg-primary">Sistema BIOSEC UNET</p>
			</div>
		</div>
	</footer>
	<script type="text/javascript" src="{{ asset('plugins/jquery/js/jquery-3.3.1.js') }}"></script>
	<script type="text/javascript" src="{{ asset('plugins/bootstrap/js/bootstrap.js') }}"></script>
	@yield('script')	
</body>
</html>