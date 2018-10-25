<?php

namespace App\Http\Controllers;

use App\Boletas;
use App\Ventas;
use App\NotaCredito;
use App\NotaDebito;
use Validator;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class EmiteController extends Controller{

    public function __construct(){
        $this->middleware('auth');
    }

    public function emite(){
        return view('emite.emite');
    }

    public function obtenerCorrelativo($tipo_doc){
        $response = array();
        $correlativo = null;
        switch($tipo_doc){
            case 'FAC':
                $correlativo = Ventas::max('correlativo');
                break;
            case 'BOL':
                $correlativo = Boletas::max('correlativo');
                break;
            case 'NOT':
                $correlativo = NotaCredito::max('correlativo');
                break;  
            case 'DEB':
                $correlativo = NotaDebito::max('correlativo');
                break;
        }
        if(!empty($correlativo)){
            $response = array("correlativo" => $correlativo);
            return array("success" => true,"data" => $response);
        }else{
            return array("success" => false);
        }
    }

}