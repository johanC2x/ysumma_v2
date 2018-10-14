<?php

namespace App\Http\Controllers;

use App\Ventas;
use Validator;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class NotaCreditoController extends Controller{

    //MODULO DE EMISION DE BOLETAS
    public function index(){
        return view('notas.index');
    }

    public function save(){
        
    }

}

?>