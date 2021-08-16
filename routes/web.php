<?php

use Illuminate\Support\Facades\Route;

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


    Route::get('/home', function () {
        return redirect('/');
    });

Auth::routes();
    
    Route::group(['middleware' => ['auth']], function () {
        
        Route::get('/', 'HomeController@dashboard');
    
        // Automated Tasks
        Route::get('/tablets', 'TabletController@index');
        Route::get('/tablets/create', 'TabletController@create');
        Route::post('/tablets/create', 'TabletController@store');
        Route::get('/tablets/{id}/edit', 'TabletController@edit');
        Route::post('/tablets/{id}', 'TabletController@update');
        Route::get('/tablets/{id}/manage', 'TabletController@manage');
        Route::get('/tablets/delete/{id}', 'TabletController@destroy');
    
    
    });
