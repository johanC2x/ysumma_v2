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
    return view('index');
});

//MODULO DE VENTAS
Route::get('/sales', 'SalesController@index');
Route::post('/sales', 'SalesController@save');

//MODULO DE CLIENTES
Route::get('/customer', 'CustomerController@index');
Route::get('/customer/{customer_id}', 'CustomerController@findByName');
Route::post('/customer', 'CustomerController@save');

