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

/*
Route::get('/', function () {
    return view('index');
});
*/

//MODULO DE VENTAS
Route::get('/sales', 'SalesController@index');
Route::post('/sales', 'SalesController@save');
Route::get('/sales/{id}/{num_cpe}', 'SalesController@update');

//MODULO DE BOLETAS
Route::get('/boletas', 'BoletasController@index');
Route::post('/boletas', 'BoletasController@save');
Route::get('/boletas/{id}/{num_cpe}', 'BoletasController@update');

//MODULO DE NOTAS DE CREDITO
Route::get('/nota-credito', 'NotaCreditoController@index');
Route::post('/nota-credito', 'NotaCreditoController@save');
Route::get('/nota-credito/{nro_doc_nota}/{tipo_doc}', 'NotaCreditoController@getNroDoc');
Route::get('/nota-credito/update/{id}/{num_cpe}', 'NotaCreditoController@update');

//MODULO DE NOTAS DE DEBITO
Route::get('/nota-debito', 'NotaDebitoController@index');
Route::post('/nota-debito', 'NotaDebitoController@save');
Route::get('/nota-debito/{nro_doc_nota}/{tipo_doc}', 'NotaDebitoController@getNroDoc');
Route::get('/nota-debito/update/{id}/{num_cpe}', 'NotaDebitoController@update');

//MODULO DE PRUEBAS
Route::get('/sales/test', 'SalesController@api');

//MODULO DE CLIENTES
Route::get('/customer', 'CustomerController@index');
Route::get('/customer/{customer_id}/{is_sales}', 'CustomerController@findByName');
Route::post('/customer', 'CustomerController@save');

//MODULO DE EMISION DE RECIBOS
Route::get('/emite', 'EmiteController@emite');
Route::get('/emite/correlativo/{tipo_doc}', 'EmiteController@obtenerCorrelativo');

Auth::routes();

//RUTAS DE MAPEO
Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');
