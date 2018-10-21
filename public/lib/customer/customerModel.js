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
					document.getElementById("frm_cliente").reset();
					util.setMessages("msg_customer","insert_success");
				}else if(response.hasOwnProperty("msg")){
					util.openModalMsg(response.msg);
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
						$("#cliente_id").val(data.id);
						$("#customer_name").val(data.nombres_completos);
						$("#tipo_doc").val(data.tipo_doc);
						$("#nro_doc").val(data.nro_doc);
						$("#direccion").val(data.direccion);
						$("#email").val(data.email);
					}else{
						util.openModalMsg("El cliente ingresado no existe");
					}
				}
			});	
		}
	};

	self.addItems = () => {
		let item_name = document.getElementById("item_name");
		let item_code = document.getElementById("item_code");
		let item_quantity = document.getElementById("item_quantity");
		let item_unit = document.getElementById("item_unit");
		let item_afec = document.getElementById("item_afec");
		let item_price = document.getElementById("item_price");
		let item_isc = document.getElementById("item_isc");
		let item_igv = document.getElementById("item_igv");
		let item_import = document.getElementById("item_import");

		let objeto = {};
		objeto.item_name = (item_name.value !== '') ? item_name.value:'';
		objeto.item_code = (item_code.value !== '') ? item_code.value:'';
		objeto.item_quantity = (item_quantity.value !== '') ? item_quantity.value:'';
		objeto.item_unit = (item_unit.value !== '') ? item_unit.value:'';
		objeto.item_afec = (item_afec.value !== '') ? item_afec.value:'';
		objeto.item_price = (item_price.value !== '') ? item_price.value:0;
		objeto.item_isc = (item_isc.value !== '') ? item_isc.value:0;
		objeto.item_igv = (item_igv.value !== '') ? item_igv.value:0;
		objeto.item_import = (item_import.value !== '') ? item_import.value:0;
		self.list_items.push(objeto);
		document.getElementById("_item_list").value = JSON.stringify(self.list_items);
		self.makeTable();
	};

	self.makeTable = () => {
		let tbody = '';
		let tfooter = '';
		$("#tbl_items tbody").empty();
		$("#tbl_items tfoot").empty();
		if(self.list_items.length > 0){
			var total = 0;
			var igv = 0;
			for(var i = 0;i < self.list_items.length;i++){
				let obj = self.list_items[i];
				tbody += `<tr>
							<td><center>`+ obj.item_name +`</center></td>
							<td><center>`+ obj.item_code +`</center></td>
							<td><center>`+ obj.item_quantity +`</center></td>
							<td><center>`+ obj.item_unit +`</center></td>
							<td><center>`+ obj.item_afec +`</center></td>
							<td><center>`+ obj.item_igv +`</center></td>
							<td><center>`+ obj.item_import +`</center></td>
						</tr>`;
				total = total + parseFloat(obj.item_import);
				igv = igv + parseFloat(obj.item_igv);
			}
			if(total !== 0){
				tfooter = `<tr>
							<td colspan="6" style="text-align: right;">
								TOTAL: 
							</td>
							<td>
								<center>
									`+ total +`
								</center>
							</td>
						</tr>`;
			}else{
				tfooter = `<tr>
								<td colspan="6" style="text-align: right;">
									TOTAL: 
								</td>
								<td>
									<center>
										0.00
									</center>
								</td>
							</tr>`;
			}
			$('#frm_add_item').bootstrapValidator("resetForm",true);
			//SETEANDO VALORES TOTALES
			document.getElementById("total_importe").value = total;
			document.getElementById("total_igv").value = igv;
		}else{
			tbody = `<tr>
						<td colspan="7">
							<center>
								No se encontraron resultados
							</center>
						</td>
					</tr>`;
		}
		$("#tbl_items tbody").append(tbody);
		$("#tbl_items tfoot").append(tfooter);
	};

	return self;
}(jQuery);