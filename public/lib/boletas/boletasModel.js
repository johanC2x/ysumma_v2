var boletas = ( () => {

	var self = {
		resource : window.location.href,
		current : {},
		document : {
			oTipCpe : '03',
			oSerCpe : 'B001',
			oNroCpe : ''
		},
		url : '',
		valores_op_gravados : [10,17],
		monto_op_gravados : 0,
		valores_op_inafecto : [30],
		monto_op_inafecto : 0,
		valores_op_exonerado : [20],
		monto_op_exonerado : 0,
		valores_op_gratuita : [11,12,13,14,15,16,31,32,33,34,35,36,21],
		monto_op_gratuita : 0
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
									self.cleanForm();
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

	self.cleanForm = () => {
		self.obtenerCorrelativo();
		document.getElementById("frm_sales").reset();
		$('#frm_sales').bootstrapValidator("resetForm",true);
		$('#frm_add_item').bootstrapValidator("resetForm",true);
		document.getElementById("fec_emision").value = util.fec_emision;
		document.getElementById("item_quantity").value = 0;
		document.getElementById("item_price").value = 0;
		document.getElementById("item_isc").value = 0;
		document.getElementById("item_igv").value = 0;
		document.getElementById("item_import").value = 0;
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
		request.mnt_tot_grv = parseFloat(self.valores_op_gravados).toFixed(2);
		request.mnt_tot_inf = parseFloat(self.valores_op_inafecto).toFixed(2);
		request.mnt_tot_exr = parseFloat(self.valores_op_exonerado).toFixed(2);
		request.mnt_tot_grt = parseFloat(self.valores_op_gratuita).toFixed(2);
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
			let igv = (item_price_val * item_quantity_val) * 0.18;
			let total = (item_price_val * item_quantity_val) + igv;
			document.getElementById("item_igv").value = parseFloat(igv).toFixed(2);
			document.getElementById("item_import").value = parseFloat(total).toFixed(2);
			document.getElementById("item_isc").value = 0;
		}
	};

	self.calcularMontos = () => {
		if(document.getElementById("item_afec").value !== ''){
			let afec = document.getElementById("item_afec");
			let price = parseFloat(document.getElementById("item_price").value);
			let quantity = parseFloat(document.getElementById("item_quantity").value);
			//OBTENIENDO TOTALES
			var obj_grav = self.valores_op_gravados.find( x => x === parseInt(afec.value));
			if(obj_grav !== undefined){
				if(price !== 0 && quantity!== 0){
					self.monto_op_gravados = self.monto_op_gravados + (price * quantity);
					document.getElementById("op_gravadas").value = parseFloat(self.monto_op_gravados).toFixed(2);
					document.getElementById("op_inafecta").value = 0.00;
					document.getElementById("op_exonerada").value = 0.00;
					document.getElementById("op_gratuita").value = 0.00;
				}
			}
			var obj_inaf = self.valores_op_inafecto.find( x => x === parseInt(afec.value));
			if(obj_inaf !== undefined){
				if(price !== 0 && quantity!== 0){
					self.monto_op_inafecto = self.monto_op_inafecto + (price * quantity);
					document.getElementById("op_inafecta").value = parseFloat(self.monto_op_inafecto).toFixed(2);
					document.getElementById("op_gravadas").value = 0.00;
					document.getElementById("op_exonerada").value = 0.00;
					document.getElementById("op_gratuita").value = 0.00;
				}
			}
			var obj_exon = self.valores_op_exonerado.find( x => x === parseInt(afec.value));
			if(obj_exon !== undefined){
				if(price !== 0 && quantity!== 0){
					self.monto_op_exonerado = self.monto_op_exonerado + (price * quantity);
					document.getElementById("op_exonerada").value = parseFloat(self.monto_op_exonerado).toFixed(2);
					document.getElementById("op_inafecta").value = 0.00;
					document.getElementById("op_exonerada").value = 0.00;
					document.getElementById("op_gratuita").value = 0.00;
				}
			}
			var obj_grat = self.valores_op_gratuita.find( x => x === parseInt(afec.value));
			if(obj_grat !== undefined){
				if(price !== 0 && quantity !== 0){
					self.monto_op_gratuita = self.monto_op_gratuita + (price * quantity);
					document.getElementById("op_gratuita").value = parseFloat(self.monto_op_gratuita).toFixed(2);
					document.getElementById("op_inafecta").value = 0.00;
					document.getElementById("op_exonerada").value = 0.00;
					document.getElementById("op_gravadas").value = 0.00;
				}
			}
		}
	};

	return self;
}) ();