  <style>
        body{margin-top:50px;}
.glyphicon { margin-right:10px;  }
.panel-body { padding:0px; }
.panel-body table tr td { padding-left: 15px }
.panel-body .table {margin-bottom: 0px; }
.panel-default > .panel-heading {
  background-color: #133d87;
}

        </style>


<div class="col-sm-3 col-md-3">
            <div class="panel-group" id="accordion">
				  @guest
				 <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 style="color:#FFFFFF" class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-user">
                            </span>Ingreso Al Sistema</a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-log-in text-primary"></span><a href="{{route('login')}}">Login</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-envelope text-primary"></span><a href="{{route('contacto')}}">Contacto</a>
                                    </td>
                                </tr>
                               
                            </table>
                        </div>
                    </div>
                </div>
 					 @else
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 style="color:#FFFFFF" class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-folder-close">
                            </span>Principal</a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-home text-primary"></span><a href="{{route('home')}}">Inicio</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-envelope text-primary"></span><a href="{{route('contacto')}}">Contacto</a>
                                    </td>
                                </tr>
                               
                            </table>
                        </div>
                    </div>
                </div>

                @if(!Auth::user()->ROL_EST())

                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 style="color:#FFFFFF" class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-th">
                            </span>Modulos</a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                              
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-picture text-primary"></span><a href="{{route('imagenes.index')}}">Adm. de Imagenes</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                         <span class="glyphicon glyphicon-globe text-primary"></span><a href="{{route('paises.index')}}">Adm. de Nacionalidad</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                         <span class="glyphicon glyphicon-usd text-primary"></span><a href="{{route('home')}}">Adm. de Instrumento Financiero</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                @endif
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 style="color:#FFFFFF" class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span class="glyphicon glyphicon-user">
                            </span>Cuenta</a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <a href="{{route('usuario.index')}}">Mis Datos</a>
                                    </td>
                                </tr>
                             <tr>
                                    <td>
                                        <a href="{{route('admin.usuario.permisos')}}">Mis Permisos</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4  style="color:#FFFFFF"class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span class="glyphicon glyphicon-file">
                            </span>Reportes</a>
                        </h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                            @if(!Auth::user()->ROL_EST())
                                <tr>
                                    <td>
                                        <a href="{{route('bitacora.index')}}">Bitacora</a>
                                    </td>
                                </tr>
                               @endif

                                <tr>
                                    <td>
                                        <a href="{{route('personas.index')}}">Consultar Socios</a>
                                    </td>
                                </tr>

                         
                                
                            </table>
                        </div>
                    </div>
                </div>
                  @endguest
            </div>
        </div>