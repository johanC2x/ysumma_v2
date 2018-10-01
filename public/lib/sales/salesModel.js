var sales = function () {

	var self = {
		resource : window.location.href,
	};

	self.init = () => {
		
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
					document.getElementById("frm_sales").reset();
					$('#frm_sales').bootstrapValidator("resetForm",true);
					$('#frm_add_item').bootstrapValidator("resetForm",true);
				}else{
					
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
}(jQuery);