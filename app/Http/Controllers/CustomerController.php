<?php

namespace App\Http\Controllers;

use App\Clientes;
use Validator;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class CustomerController extends Controller{

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(){
        //return view('customer.index');
    }

    public function findByName($customer_id = null){
        if(!empty($customer_id)){
            $data = Clientes::where('nro_doc', 'like', '%' . $customer_id . '%')->first();
            if(!empty($data)){
                return array("success" => true, "data" => $data);
            }else{
                return array("success" => false);
            }
        }else{
            return array("success" => false);
        }
    }

    //METODO DE GUARDADO
    public function save(Request $request){
        $input = (!empty($request->input())) ? $request->input() : false;
        if($input){
            $data = Clientes::where('nro_doc', $request["nro_doc"])->first();
            if(empty($data)){
                $clientes = new Clientes;
                $clientes->nombres_completos = $request["nombre"];
                $clientes->nro_doc = $request["nro_doc"];
                $clientes->tipo_doc = $request["tipo_doc"];
                $clientes->direccion = $request["direccion"];
                $clientes->email = $request["email"];
                $clientes->tipo_email = $request["tipo_envio_mail"];
                $clientes->descripcion = $request["comentario"];
                if($clientes->save()){
                    return array("success" => true);
                }else{
                    return array("success" => false);
                }
            }else{
                return array("success" => false,"msg" => "El usuario ingresado actualmente existe");
            }
        }else{
            return array("success" => false);
        }
    }

}
