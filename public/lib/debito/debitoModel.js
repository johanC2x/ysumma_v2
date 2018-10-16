var debito = ( () => {

	var self = {
		resource : window.location.href,
	};
 
	self.init = () => {
		
	};

	self.obtenerNumeroRecibo = () => {
		var nro_doc = document.getElementById("nro_doc_rec").value;
		var tipo_doc = (document.getElementById("ck_add_doc_in").checked === true) ? "FAC" : "BOL";
		$.ajax({
			type:"GET",
			data:{},
			url:self.resource + '/' + nro_doc + "/" + tipo_doc,
			success:function(response){
				if(!response.success){
					util.openModalMsg("El número de documento ingresado no existe");
				}
			}
		});
	};

	self.saveTest = () => {
		var token = $("#_token").val();
		$.ajax({
			type:"GET",
			data:$("#frm_sales").serialize(),
			url:self.resource + '/test',
			headers:{'X-CSRF-TOKEN' : token},
			success:function(response){
				console.log(response);
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
					customer.list_items = [];
					customer.makeTable();
					document.getElementById("frm_sales").reset();
					$('#frm_sales').bootstrapValidator("resetForm",true);
					$('#frm_add_item').bootstrapValidator("resetForm",true);
					$("#modal_success").modal("show");
				}else{
					$("#modal_error").modal("show");
				}
			}
		});
	};

	self.addImp = () => {
		let item_afec_val = document.getElementById("item_afec").value;
		let item_price_val = document.getElementById("item_price").value;
		let item_quantity_val = document.getElementById("item_quantity").value;
		if(item_afec_val !== "" && item_price_val !== "0" && item_quantity_val !== "0"){
			let igv = (item_price_val * item_quantity_val) * 0.18;
			let total = (item_price_val * item_quantity_val) + igv;
			document.getElementById("item_igv").value = igv;
			document.getElementById("item_import").value = total;
			document.getElementById("item_isc").value = 0;
		}
	};

	return self;
}) ();