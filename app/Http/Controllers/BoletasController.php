<?php

namespace App\Http\Controllers;

use App\Boletas;
use Validator;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class BoletasController extends Controller{
    
    //MODULO DE EMISION DE BOLETAS
    public function index(){
        return view('boletas.index');
    }

    //METODO DE GUARDADO
    public function save(Request $request){
        $input = (!empty($request->input())) ? $request->input() : false;
        if($input){
            $ventas = new Boletas;
            $ventas->nro_doc = $input["nro_orden_compra"];
            $ventas->nro_ord_com = $input["nro_orden_compra"];
            $ventas->serie = $input["nro_serie"];
            $ventas->id_cond_pago = $input["con_pago"];
            $ventas->fec_emi = $input["fec_emision"];
            $ventas->fec_venc = $input["fec_vencimiento"];
            $ventas->items = $input["_item_list"];
            $ventas->id_form_pago = $input["form_pago"];
            $ventas->id_moneda = $input["moneda"];
            $ventas->tipo_cambio = $input["tipo_cambio"];
            $ventas->cliente_id = $input["cliente_id"];
            $ventas->id_tipo_guia = $input["tipo_guia"];
            $ventas->nro_guia = $input["nro_guia"];
            $ventas->descripcion_guia = $input["desc_guia"];
            $ventas->tipo_doc = "BOL";
            if($ventas->save()){
                return array("success" => true);
            }else{
                return array("success" => false);
            }
        }else{
            return array("success" => false);
        }
    }

}

?>