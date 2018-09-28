<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class SalesController extends Controller{

    public function __construct(){
        
    }

    public function index(){
        return view('sales.index');
    }

    //METODO DE GUARDADO
    public function save(Request $request){
        echo "<pre/>";print_r($request->input());
        exit();
    }

}
