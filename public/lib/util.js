var util = function () {

	var self = {};

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

	return self;
}(jQuery);