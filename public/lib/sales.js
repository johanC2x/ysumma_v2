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
				console.log(response);
			}
		});
	};

	return self;
}(jQuery);