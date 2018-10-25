var util = function () {

	var self = {
        url : window.location.origin,
        fec_emision : moment().format('YYYY-MM-DD'),
        time : moment().format('YYYY-MM-DD'),
        api_url : "http://34.203.202.3:4254/taxtech",
        app : {
            entidad_ruc : '20602919057',
            entidad_nombre : 'YMPERIUM SUMMA S.A.C.'
        }
    };

    self.block = () => {
        $.blockUI({ 
            message: '<img src="http://localhost:8000/images/loading.gif" title="loading" height="80" />' 
        });
    };

    self.unblock = () => {
        $.unblockUI();
    };

    self.addTime = (number,type) => {
        switch(type){
            case 'days':
                self.time = moment().add(number, 'days').format('YYYY-MM-DD');
                break;
            case 'months':
                self.time = moment().add(number, 'months').format('YYYY-MM-DD');
                break;
            case 'years':
                self.time = moment().add(number, 'years').format('YYYY-MM-DD');
                break;
        }
        return self.time;
    };

	self.validateForm = (form_id) => {
        var errors = [];
        var elements = document.getElementById(form_id).elements;
        for (var i = 0; i < elements.length;i++) {
            if(elements[i].type !== "button"){
                var input = elements[i].classList;
                if(input[1] === "required"){
                    errors.push(elements[i].getAttribute('data-name'));
                }
            }
        }
        console.log(errors);
    };
    
    self.setMessages = (obj_id,type) => {
        var msg = "";
        switch(type){
            case 'insert_success':
                msg = `<div class="alert alert-success alert-dismissible">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        Se ha generado un nuevo registro
                      </div>`;
                break;
            case 'insert_fail':
                msg = `<div class="alert alert-danger alert-dismissible">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            Registro <b>no</b> insertado
                        </div>`;
                break;
            case 'insert_validate_sales':
                msg = `<div class="alert alert-danger alert-dismissible">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            Es necesario registrar items al recibo
                        </div>`;
                break;
        }
        if(msg !== ""){
            $("#"+obj_id).html(msg);
        }
    };

    self.openModalMsg = (msg_modal) => {
        document.getElementById("mensaje_modal").innerHTML = msg_modal;
		$("#modal_msg").modal("show");
    };

    self.callRest = (request,method,callback) => {
        /*
        var args = {
            "fec_emi": "2018-10-08",
            "hor_emi": "10:23:16",
            "cod_tip_ope": "0101",
            "serie": "F001",
            "correlativo": "00001002",
            "moneda": "USD",
            "cod_tip_otr_doc_ref": "01",
            "tip_doc_rct": "6",
            "nro_doc_rct": "10062611371",
            "dir_des_rct": "PERU LIMA",
            "nro_doc": "20101914837",
            "nom_emi": "TURIFAX, S.A.C.",
            "nom_rct": "NELSON JOSE PEREZ DIAZ",
            "mnt_tot_imp": "12.24",
            "mnt_tot_grv": "68.00",
            "mnt_tot_inf": "0.00",
            "mnt_tot_exr": "0,00",
            "mnt_tot_grt": "23.00",
            "mnt_tot_exp": "0.00",
            "mnt_tot_isc": "0.00",
            "mnt_tot_trb_igv": "0.00",
            "mnt_tot_trb_isc": "0.00",
            "mnt_tot_trb_otr": "0.00",
            "mnt_tot_val_vta": "0.00",
            "mnt_tot_prc_vta": "0.00",
            "mnt_tot_dct": "0.00",
            "mnt_tot_otr_cgo": "0.00",
            "mnt_tot": "103.24",
            "mnt_tot_antcp": "0.00",
            "email": "datasoft28@gmail.com",
            "tip_pag": "006",
            "frm_pag": "000",
            "list_service_doc": "[{\"service_doc_name\":\"$('#myModalExito').modal('show'); // abrir $('#myModalExito').modal('hide'); // cerrar\",\"service_doc_type\":\"Crucero\",\"service_doc_trib\":\"14\",\"service_doc_quantity\":\"1\",\"service_doc_amount\":\"23\",\"service_doc_name_detail\":\"\"},{\"service_doc_name\":\"segundo\",\"service_doc_type\":\"Trenes\",\"service_doc_trib\":\"10\",\"service_doc_quantity\":\"2\",\"service_doc_amount\":\"34\",\"service_doc_name_detail\":\"                            hola mundo\"}]"
        };
        */
        if(Object.keys(request).length > 0 && method !== ""){
            fetch(self.api_url,{
                method: method,
                body: JSON.stringify(request),
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(
                (resp) => resp.json()
            ).then(function(data) {
                callback(data);
            }, function(error) {
                error.message //=> String
            });
        }else{
            callback({success : false});
        } 
    };

	return self;
}(jQuery);