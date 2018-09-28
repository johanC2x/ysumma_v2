var customer = function () {

	var self = {
		resource : window.location.origin + "/customer",
		list_items : []
	};

	self.init = () => {
		
	};

	self.save = (form_id) => {
		var token = $("#_tokenCustomer").val();
		$.ajax({
			type:"POST",
			data:$("#"+form_id).serialize(),
			url:self.resource,
			headers:{'X-CSRF-TOKEN' : token},
			success:function(response){
				if(response.success){
					$('#frm_cliente').bootstrapValidator("resetForm",true);
					util.setMessages("msg_customer","insert_success");
				}else{
					util.setMessages("msg_customer","insert_fail");
				}
			}
        });
	};

	self.buscarClientePorNombre = () => {
		var customer_id = $("#customer_id").val();
		if(customer_id !== ""){
			$.ajax({
				type:"GET",
				data:{},
				url:self.resource + "/" + customer_id,
				success:function(response){
					if(response.success){
						var data = response.data;
						$("#customer_name").val(data.nombres_completos);
						$("#tipo_doc").val(data.tipo_doc);
						$("#nro_doc").val(data.nro_doc);
					}
				}
			});	
		}
	};

	self.addItems = () => {
		var frm = $("#frm_add_item").serializeArray();
		let item_name = frm.find(obj => obj.name=='item_name');
		let item_code = frm.find(obj => obj.name=='item_code');
		let item_quantity = frm.find(obj => obj.name=='item_quantity');
		let item_unit = frm.find(obj => obj.name=='item_unit');
		let item_afec = frm.find(obj => obj.name=='item_afec');
		let item_price = frm.find(obj => obj.name=='item_price');
		let item_isc = frm.find(obj => obj.name=='item_isc');
		let item_igv = frm.find(obj => obj.name=='item_igv');
		let item_import = frm.find(obj => obj.name=='item_import');

		let objeto = {};

		objeto.item_name = (item_name.value !== '') ? item_name.value:'';
		objeto.item_code = (item_code.value !== '') ? item_code.value:'';
		objeto.item_quantity = (item_quantity.value !== '') ? item_quantity.value:'';
		objeto.item_unit = (item_unit.value !== '') ? item_unit.value:'';
		objeto.item_afec = (item_afec.value !== '') ? item_afec.value:'';
		objeto.item_price = (item_price.value !== '') ? item_price.value:'';
		objeto.item_isc = (item_isc.value !== '') ? item_isc.value:'';
		objeto.item_igv = (item_igv.value !== '') ? item_igv.value:'';
		objeto.item_import = (item_import.value !== '') ? item_import.value:'';
		self.list_items.push(objeto);
	};

	self.makeTable = () => {
		for(var i = 0;i < self.list_items.length;i++){
			
		}
	};

	return self;
}(jQuery);