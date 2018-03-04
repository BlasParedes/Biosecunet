<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->middleware('auth');

Route::get('/contacto', function () {
    return view('contacto');
})->name('contacto');

Route::group(['prefix' => 'admin', 'middleware' =>'auth'], function () {
     
      Route::resource('bitacora', 'BitacoraController');
     Route::resource('paises', 'PaisesController')->middleware('Gestion_Nacionalidad');;
	 Route::resource('personas', 'PersonasController');
 		Route::post('personas/buscar',[
		'uses' => 'PersonasController@search',
     	 'as' => 'admin.personas.search'
		]);
	Route::resource('imagenes','ImagenesController')->middleware('Gestion_Imagenes');
	Route::get('imagenes/{id}/destroy',[
		'uses' => 'ImagenesController@destroy',
     	 'as' => 'admin.imagenes.destroy'
		]);
    Route::post('imagenes/buscar',[
		'uses' => 'ImagenesController@search',
     	 'as' => 'admin.imagenes.search'
		]);
    Route::resource('usuario','UsuarioController');
    Route::get('admin/usuario/permisos',[
		'uses' => 'UsuarioController@permisos',
     	 'as' => 'admin.usuario.permisos'
		]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
