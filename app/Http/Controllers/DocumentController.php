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

class DocumentController extends Controller{

    public function index(){
        /*
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://api.github.com/repos/guzzle/guzzle');
        */

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
        echo "<pre/>";print_r($response);exit();
    }
    
    public function create(){
        
    }
    
    public function store(Request $request){
        
    }
    
    public function show($id){

    }
   
    public function edit($id){

    }
    
    public function update(Request $request, $id){
        
    }
    
    public function destroy($id){

    }

}
