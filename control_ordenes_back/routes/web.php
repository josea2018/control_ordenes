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
    return view('welcome');
});

Auth::routes();


Route::resource('users', 'UserController');
Route::resource('inventarios', 'InventarioController');
Route::resource('clientes', 'ClienteController');
Route::resource('ordens', 'OrdenController');
Route::resource('conditions', 'ConditionController');
//Route::resource('ordenes', 'OrdenController@/update{id}');
//Route::get('user/{id}', 'UserController@show')


Route::get('combos/clientesReturn', 'ComboController@clientesReturn');
Route::get('combos/conditionsReturn', 'ComboController@conditionsReturn');