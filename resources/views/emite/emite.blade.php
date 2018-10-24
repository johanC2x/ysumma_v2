<?php
    $oNroCpe = (isset($_GET["oNroCpe"]) && !empty($_GET["oNroCpe"])) ? $_GET["oNroCpe"] : false;
    $oTipCpe = (isset($_GET["oTipCpe"]) && !empty($_GET["oTipCpe"])) ? $_GET["oTipCpe"] : false;
    $oSerCpe = (isset($_GET["oSerCpe"]) && !empty($_GET["oSerCpe"])) ? $_GET["oSerCpe"] : false;
    if($oNroCpe && $oTipCpe && $oSerCpe){
        $data = array(
            "oTipCpe" => $oTipCpe,
            "oSerCpe" => $oSerCpe,
            "oNroCpe" => $oNroCpe,
            "oFlgXml" => false,
            "oFlgPdf" => true
        );
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "http://34.203.202.3:4254/document/extract"); //PRODUCCION
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
            $byte_string = $response->data->DOC_TRIB_PDF;
        }
        header('Content-type: application/pdf');
        header('Content-Disposition: attachment; filename="Boleta.pdf"');
        echo base64_decode($byte_string);
        exit();
    }
?>