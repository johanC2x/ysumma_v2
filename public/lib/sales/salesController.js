document.addEventListener("DOMContentLoaded",function(){
    
    // VALIDACION DE DETRACCION ====================================================== //
    
    document.getElementById("content_val_det").style.display = "none";
    document.getElementById("ck_det_out").checked = true;

    if(document.getElementById("ck_det_out") !== null){
        const ck_det_out = document.getElementById("ck_det_out");
        ck_det_out.addEventListener("click" ,() => {
            document.getElementById("ck_det_out").checked = true;
            document.getElementById("ck_det_in").checked = false;
            document.getElementById("content_val_det").style.display = "none";
        });
    }

    if(document.getElementById("ck_det_in") !== null){
        const ck_det_in = document.getElementById("ck_det_in");
        ck_det_in.addEventListener("click" ,() => {
            document.getElementById("ck_det_in").checked = true;
            document.getElementById("ck_det_out").checked = false;
            document.getElementById("content_val_det").style.display = "block";
        });
    }

    if(document.getElementById("val_detraccion") !== null){
        const val_detraccion = document.getElementById("val_detraccion");
        val_detraccion.addEventListener("change" ,() => {
            var detra_monto = $("#val_detraccion option:selected").attr("data-monto");
            var total_importe = document.getElementById("total_importe").value;
			var total_igv = document.getElementById("total_igv").value;

            document.getElementById("total_importe").value = (total_importe * detra_monto) + total_importe;
            document.getElementById("total_igv").value = (total_igv * detra_monto) + total_importe;
        });
    }

    // =============================================================================== //

    // VALIDACION FORMULARIO DE VENTAS =============================================== //
    $('#frm_sales').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fec_emision: {
                validators: {
                    notEmpty: {
                        message: 'El campo fecha de emisión es requerido'
                    }
                }
            },
            nro_serie: {
                validators: {
                    notEmpty: {
                        message: 'El campo número de serie es requerido'
                    }
                }
            },
            customer_name: {
                validators: {
                    notEmpty: {
                        message: 'El campo nombre o razón social es requerido'
                    }
                }
            },
            tipo_doc: {
                validators: {
                    notEmpty: {
                        message: 'El campo tipo de documento es requerido'
                    }
                }
            },
            nro_doc: {
                validators: {
                    notEmpty: {
                        message: 'El campo número de documento es requerido'
                    }
                }
            },
            direccion: {
                validators: {
                    notEmpty: {
                        message: 'El campo dirección es requerido'
                    }
                }
            },
            con_pago: {
                validators: {
                    notEmpty: {
                        message: 'El campo condición de pago es requerido'
                    }
                }
            },
            fec_vencimiento: {
                validators: {
                    notEmpty: {
                        message: 'El campo fecha de vencimiento es requerido'
                    }
                }
            },
            form_pago: {
                validators: {
                    notEmpty: {
                        message: 'El campo forma de pago es requerido'
                    }
                }
            },
            nro_orden_compra: {
                validators: {
                    notEmpty: {
                        message: 'El campo número de orden de compra es requerido'
                    }
                }
            },
            moneda: {
                validators: {
                    notEmpty: {
                        message: 'El campo moneda es requerido'
                    }
                }
            },
            tipo_cambio: {
                validators: {
                    notEmpty: {
                        message: 'El campo tipo de cambio es requerido'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        if(customer.list_items.length > 0){
            sales.save();
        }else{
            util.setMessages("msg_sales_validate","insert_validate_sales");
        }
    });

    //BOTON DE GUARDADO
    if(document.getElementById("btn_save_sales") !== null){
        const btn_save_sales = document.getElementById("btn_save_sales");
        btn_save_sales.addEventListener("click" ,() => {
            $('#frm_sales').bootstrapValidator('validate');
        });
    }
    //BOTON DE CANCELAR
    if(document.getElementById("btn_cancel_sales") !== null){
        const btn_cancel_sales = document.getElementById("btn_cancel_sales");
        btn_cancel_sales.addEventListener("click" ,() => {
            $('#frm_sales').bootstrapValidator("resetForm",true);
        });
    }
    // =============================================================================== //

    // VALIDACION FORMULARIO DE CLIENTES =============================================== //
    $('#frm_cliente').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        excluded: [':disabled'],
        fields: {
            tipo_doc: {
                validators: {
                    notEmpty: {
                        message: 'El campo tipo de documento es requerido'
                    }
                }
            },
            nro_doc: {
                validators: {
                    notEmpty: {
                        message: 'El campo número de documento es requerido'
                    }
                }
            },
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'El campo nombre o razón social es requerido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'El campo email es requerido'
                    }
                }
            },
            tipo_envio_mail: {
                validators: {
                    notEmpty: {
                        message: 'El campo tipo de correo es requerido'
                    }
                }
            },
            direccion: {
                validators: {
                    notEmpty: {
                        message: 'El campo dirección es requerido'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        customer.save("frm_cliente");
    });

    if(document.getElementById("btn_guardar_cliente") !== null){
        const btn_guardar_cliente = document.getElementById("btn_guardar_cliente");
        btn_guardar_cliente.addEventListener("click" ,() => {
            $('#frm_cliente').bootstrapValidator('validate');
        });
    }

    if(document.getElementById("btn_cerrar_frm_cliente") !== null){
        const btn_cerrar_frm_cliente = document.getElementById("btn_cerrar_frm_cliente");
        btn_cerrar_frm_cliente.addEventListener("click" ,() => {
            $("#modal_customer").modal("hide");
            $('#frm_cliente').bootstrapValidator("resetForm",true);
        });
    }

    // ================================================================================= //

    // ========================== FILTROS DE BUSQUEDA ====================================//

    if(document.getElementById("btn_buscar_cliente") !== null){
        const btn_buscar_cliente = document.getElementById("btn_buscar_cliente");
        btn_buscar_cliente.addEventListener("click" ,() => {
            customer.buscarClientePorNombre();
        });
    }

    //===================================================================================//
    
    $('#frm_add_item').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        excluded: [':disabled'],
        fields: {
            item_name: {
                validators: {
                    notEmpty: {
                        message: 'El campo item es requerido'
                    }
                }
            },
            item_code: {
                validators: {
                    notEmpty: {
                        message: 'El campo código es requerido'
                    }
                }
            },
            item_quantity: {
                validators: {
                    notEmpty: {
                        message: 'El campo cantidad es requerido'
                    }
                }
            },
            item_unit:{
                validators: {
                    notEmpty: {
                        message: 'El campo unidad es requerido'
                    }
                }
            },
            item_afec:{
                validators: {
                    notEmpty: {
                        message: 'El campo afectación es requerido'
                    }
                }
            },
            item_price:{
                validators: {
                    notEmpty: {
                        message: 'El campo precio es requerido'
                    }
                }
            },
            item_isc:{
                validators: {
                    notEmpty: {
                        message: 'El campo isc es requerido'
                    }
                }
            },
            item_igv:{
                validators: {
                    notEmpty: {
                        message: 'El campo igv es requerido'
                    }
                }
            },
            item_import:{
                validators: {
                    notEmpty: {
                        message: 'El campo importe es requerido'
                    }
                }
            },
        }
    }).on('success.form.bv', function(e) {
        customer.addItems();
    });

    if(document.getElementById("btn_add_items") !== null){
        const btn_add_items = document.getElementById("btn_add_items");
        btn_add_items.addEventListener("click" ,() => {
            $('#frm_add_item').bootstrapValidator('validate');
        });
    }

    if(document.getElementById("btn_clean_items") !== null){
        const btn_clean_items = document.getElementById("btn_clean_items");
        btn_clean_items.addEventListener("click" ,() => {
            $('#frm_add_item').bootstrapValidator("resetForm",true);
        });
    }

    if(document.getElementById("item_afec") !== null){
        const item_afec = document.getElementById("item_afec");
        item_afec.addEventListener("change" ,() => {
            sales.addImp();
        });
    }

    if(document.getElementById("item_price") !== null){
        const item_price = document.getElementById("item_price");
        item_price.addEventListener("change" ,() => {
            sales.addImp();
        });
    }
    
    if(document.getElementById("item_quantity") !== null){
        const item_quantity = document.getElementById("item_quantity");
        item_quantity.addEventListener("change" ,() => {
            sales.addImp();
        });
    }

});