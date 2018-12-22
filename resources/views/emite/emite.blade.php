<?php
    /*
    $oNroCpe = (isset($_GET["oNroCpe"]) && !empty($_GET["oNroCpe"])) ? $_GET["oNroCpe"] : false;
    $oTipCpe = (isset($_GET["oTipCpe"]) && !empty($_GET["oTipCpe"])) ? $_GET["oTipCpe"] : false;
    $oSerCpe = (isset($_GET["oSerCpe"]) && !empty($_GET["oSerCpe"])) ? $_GET["oSerCpe"] : false;
    */

    //URL SERVICIO
    $url = "http://34.203.202.3:4254/document/extract";

    //CREDENCIALES DE ACCESO
    $oUser = (isset($_GET["oUser"]) && !empty($_GET["oUser"])) ? $_GET["oUser"] : "demo@ysumma.feu.pe";
    $oPass = (isset($_GET["oPass"]) && !empty($_GET["oPass"])) ? $_GET["oPass"] : "8aa37c67";
    $oNroIde = (isset($_GET["oNroIde"]) && !empty($_GET["oNroIde"])) ? $_GET["oNroIde"] : "20602919057";

    //DATOS DE RECIBO
    $oNroCpe = (isset($_GET["oNroCpe"]) && !empty($_GET["oNroCpe"])) ? $_GET["oNroCpe"] : "00000007";//false
    $oTipCpe = (isset($_GET["oTipCpe"]) && !empty($_GET["oTipCpe"])) ? $_GET["oTipCpe"] : "07";//false
    $oSerCpe = (isset($_GET["oSerCpe"]) && !empty($_GET["oSerCpe"])) ? $_GET["oSerCpe"] : "BC01";//false

    if($oNroCpe && $oTipCpe && $oSerCpe){
        $data = array(
            "oUser" => $oUser,
            "oPass" => $oPass,
            "oNroIde" => $oNroIde,
            "oTipCpe" => $oTipCpe,
            "oSerCpe" => $oSerCpe,
            "oNroCpe" => $oNroCpe,
            "oFlgXml" => true,
            "oFlgPdf" => false
        );
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url); //PRODUCCION
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $result = curl_exec($curl);
        $response = null;
        $byte_string = "";
        if(!empty($result)){
            $response = json_decode($result);
        }
        curl_close($curl);
        if(isset($response->data) && isset($response->data->COD_RPTA) && $response->data->COD_RPTA === "001"){
            $byte_string = null;
            if($data["oFlgXml"]){
                $byte_string = $response->data->DOC_TRIB_XML;
                header('Content-type: text/xml');
                header('Content-Disposition: attachment; filename="Boleta.xml"');
                print_r($byte_string);
            }else{
                $byte_string = $response->data->DOC_TRIB_PDF;
                header('Content-type: application/pdf');
                header('Content-Disposition: inline; filename="Boleta.pdf"');
                echo base64_decode($byte_string);
            }
        }
        exit();
    }
?>