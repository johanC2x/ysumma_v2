var boletas = ( () => {

	var self = {
		resource : window.location.href,
		current : {},
		document : {
			oTipCpe : '03',
			oSerCpe : 'B001',
			oNroCpe : ''
		},
		url : ''
	};
 
	self.init = () => {
		self.obtenerCorrelativo();
	};

	self.obtenerCorrelativo = () => {
		$.ajax({
			type:"GET",
			data:{},
			url: util.url + '/emite/correlativo/BOL',
			success:function(response){
				if(response.success){
					let data = response.data;
					self.document.oNroCpe = (parseInt(data.correlativo) + 1).toString().padStart(8,"0");
					$("#correlativo").val(self.document.oNroCpe);
				}
			}
		});
	};

	self.save = () => {
		var token = $("#_token").val();
		$.ajax({
			type:"POST",
			data:$("#frm_sales").serialize(),
			url:self.resource,
			headers:{'X-CSRF-TOKEN' : token},
			success:function(response){
				if(response.success){
					self.current = response.data;
					var request = self.makeData("03");
					util.callRest(request,"POST",(response) => { 
						console.log(response);
						if(response.success && response.data.hasOwnProperty("callProcessOnlineResult")){
							if(response.data.callProcessOnlineResult.CODIGO === "002"){
								$("#modal_error").modal("show");
								return false;
							}
							var num_cpe = response.data.callProcessOnlineResult.NUM_CPE;
							self.update(num_cpe,(res_update) => {
								if(res_update.success){
									customer.list_items = [];
									customer.makeTable();
									self.obtenerCorrelativo();
									document.getElementById("frm_sales").reset();
									$('#frm_sales').bootstrapValidator("resetForm",true);
									$('#frm_add_item').bootstrapValidator("resetForm",true);
									$("#modal_success_boleta").modal("show");
								}else{
									$("#modal_error").modal("show");
								}
							});
						}else{
							$("#modal_error").modal("show");
						}
					});
				}else{
					$("#modal_error").modal("show");
				}
			}
		});
	};

	self.update = (num_cpe_tax,callback) => {
		$.ajax({
			type:"GET",
			data:{},
			url:self.resource + "/" + self.current.id + "/" + num_cpe_tax,
			success:function(response){
				callback(response);
			}
		});
	};

	self.obtenerDocumento = () => {
		self.url = window.origin + '/emite?oTipCpe='+self.document.oTipCpe+'&oSerCpe='+self.document.oSerCpe+'&oNroCpe='+(parseInt(self.document.oNroCpe) - 1).toString().padStart(8,"0");
		var link = document.createElement('a');
        link.href = self.url;
        link.target = '_blank';
        //link.download = "Boleta.pdf";
        document.body.appendChild(link);
        link.click();
	};

	self.makeData = (tipo_doc_emi) => {
		let request = {};
		var tipo_doc = "";
		if($("#tipo_doc").val() !== "" && $("#tipo_doc").val() !== undefined){
			switch($("#tipo_doc").val()){
				case 'DNI':
					tipo_doc = 1;
					break;
				case 'RUC':
					tipo_doc = 6;
					break;
				case 'CE':
					tipo_doc = 4;
					break;
			};
		}
		request.fec_emi = jQuery('input[name="fec_emision"]').val(); 
		request.hor_emi = moment().format('hh:mm:ss');
		request.cod_tip_ope = "0101";
		request.serie = $("#nro_serie").val();
		request.correlativo = self.document.oNroCpe;
		request.moneda = $("#moneda").val();
		request.cod_tip_otr_doc_ref = tipo_doc_emi;
		request.tip_doc_rct = tipo_doc;
		request.nro_doc_rct = jQuery('input[name="nro_doc"]').val(); 
		request.dir_des_rct = jQuery('input[name="direccion"]').val(); 
		request.nro_doc = util.app.entidad_ruc;
		request.nom_emi = util.app.entidad_nombre;
		request.nom_rct = jQuery('input[name="customer_name"]').val();
		request.mnt_tot_imp = parseFloat($("#total_importe").val()).toFixed(2);
		request.mnt_tot_grv = "00.00";
		request.mnt_tot_inf = "0.00";
		request.mnt_tot_exr = "0,00";
		request.mnt_tot_grt = "0.00";
		request.mnt_tot_exp = "0.00";
		request.mnt_tot_isc = "0.00";
		request.mnt_tot_trb_igv = parseFloat($("#total_igv").val()).toFixed(2);
		request.mnt_tot_trb_isc = "0.00";
		request.mnt_tot_trb_otr = "0.00";
		request.mnt_tot_val_vta = "0.00";
		request.mnt_tot_prc_vta = "0.00";
		request.mnt_tot_dct = "0.00";
		request.mnt_tot_otr_cgo = "0.00";
		request.mnt_tot = parseFloat($("#total_importe").val()).toFixed(2);
		request.mnt_tot_antcp = "0.00";
		request.cod_tip_detraccion = "022";
		request.mnt_tot_detraccion = ($("#val_detraccion").is("visible")) ? $("#val_detraccion").find(':selected').data('monto') : 0;
		request.email = jQuery('input[name="email"]').val();
		request.tip_pag = $("#con_pago").val();
		request.frm_pag = $("#form_pago").val();
		var arr_obj = [];
		for(var i = 0;i < customer.list_items.length;i++){
			var obj = {};
			obj.service_doc_name = customer.list_items[i].item_name;
			obj.service_doc_trib = customer.list_items[i].item_igv;
			obj.service_doc_quantity = customer.list_items[i].item_quantity;
			obj.service_doc_amount = customer.list_items[i].item_price;
			obj.cod_und_itm = customer.list_items[i].item_unit;
			obj.service_doc_name_detail = "";
			arr_obj.push(obj);
		}
		request.list_service_doc = JSON.stringify(arr_obj);
		return request;
	};

	self.addImp = () => {
		let item_afec_val = document.getElementById("item_afec").value;
		let item_price_val = document.getElementById("item_price").value;
		let item_quantity_val = document.getElementById("item_quantity").value;
		if(item_afec_val !== "" && item_price_val !== "0" && item_quantity_val !== "0"){
			let igv = (item_price_val) * 0.18;
			let total = (item_price_val * item_quantity_val) + igv;
			document.getElementById("item_igv").value = igv;
			document.getElementById("item_import").value = total;
			document.getElementById("item_isc").value = 0;
		}
	};

	return self;
}) ();