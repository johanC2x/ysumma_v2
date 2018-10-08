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

class SalesController extends Controller{

    /*
    use AuthenticatesUsers;
    
    protected $redirectTo = '/sales';

    public function __construct(){
        $this->middleware('guest')->except('logout');
    }
    */

    public function index(){
        return view('sales.index');
    }

    //METODO DE GUARDADO
    public function save(Request $request){
        $input = (!empty($request->input())) ? $request->input() : false;
        if($input){
            $ventas = new Ventas;
            $ventas->nro_doc = $input["nro_orden_compra"];
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

            //LLAMANDO API TAXTECH
            $data = array();
            $data["fec_emi"] = "2018-08-04";
            $data["hor_emi"] = "21:45:01";
            $data["serie"] = "F004";
            $data["correlativo"] = "06670";
            $data["moneda"] = "PEN";
            $data["cod_tip_otr_doc_ref"] = "01";
            $data["tip_doc_rct"] = "6";
            $data["nro_doc_rct"] = "10482270102";
            $data["dir_des_rct"] = "aaa";
            $data["nro_doc"] = "20101914837";
            $data["nom_emi"] = "TURIFAX, S.A.C.";
            $data["nom_rct"] = "GINA LEONOR ZUNIGA SERNA";
            $data["mnt_tot_imp"] = "0";
            $data["mnt_tot_grv"] = "0";
            $data["mnt_tot_inf"] = "0";
            $data["mnt_tot_exr"] = "0";
            $data["mnt_tot_grt"] = "0";
            $data["mnt_tot_exp"] = "0";
            $data["mnt_tot_isc"] = false;
            $data["mnt_tot_trb_igv"] = false;
            $data["mnt_tot_trb_isc"] = false;
            $data["mnt_tot_trb_otr"] = false;
            $data["mnt_tot_val_vta"] = false;
            $data["mnt_tot_prc_vta"] = false;
            $data["mnt_tot_dct"] = false;
            $data["mnt_tot_otr_cgo"] = false;
            $data["mnt_tot"] = "0";
            $data["mnt_tot_antcp"] = false;
            $data["email"] = "jacanari@unasolutions.com";
            $data["form_pago"] = false;

            $client = new \GuzzleHttp\Client();
            $url = "http://34.203.202.3:4254/taxtech";
            $request = $client->post($url,  ['body' => $data]);
            $response = $request->send();

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
