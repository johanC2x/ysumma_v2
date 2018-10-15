document.addEventListener("DOMContentLoaded",function(){

    //SETEANDO VALOR DE FECHAS DE EMISION ===========================================
    if(document.getElementById("fec_emision") !== null){
        document.getElementById("fec_emision").value = util.fec_emision;
    }
    //==============================================================================

    //SETEANDO VALOR DE FECHAS DE VENCIMIENTO =======================================
    if(document.getElementById("con_pago") !== null){
        const con_pago = document.getElementById("con_pago");
        con_pago.addEventListener("change" ,() => {
            if(con_pago.value !== ""){
                switch(con_pago.value){
                    case '001'://SETEANDO AL CONTADO
                        document.getElementById("fec_vencimiento").value = util.time;
                        break;
                    case '000'://NO ASIGNADO
                        document.getElementById("fec_vencimiento").value = util.time;
                        break;
                    case '002'://CREDITO A 7 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(7,"days");
                        break;
                    case '003'://CREDITO A 15 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(15,"days");
                        break;
                    case '008'://CREDITO A 20 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(20,"days");
                        break;
                    case '010'://CREDITO A 21 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(21,"days");
                        break;
                    case '011'://CREDITO A 25 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(25,"days");
                        break;
                    case '004'://CREDITO A 30 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(30,"days");
                        break;
                    case '005'://CREDITO A 60 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(60,"days");
                        break;
                    case '006'://CREDITO A 90 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(90,"days");
                        break;
                    case '007'://CREDITO A 120 DIAS
                        document.getElementById("fec_vencimiento").value = util.addTime(120,"days");
                        break;
                }
            }
        });
    }
    //===============================================================================

    //VALIDANDO UBICACION DE MODULO
    if(document.getElementsByClassName("boletas") !== null){
        var item = document.getElementsByClassName("boletas");
        item[0].classList.add("theme_color");
    }

    //VALIDACION DE PRUEBAS
    if(document.getElementById("btn_pruebas_sales") !== null){
        const btn_pruebas_sales = document.getElementById("btn_pruebas_sales");
        btn_pruebas_sales.addEventListener("click" ,() => {
            boletas.saveTest();
        });
    }

    //VALIDACION DE TIPO DE EMISION DE DOCUMENTOS
    if(document.getElementById("btn_venta_local") !== null){
        const btn_venta_local = document.getElementById("btn_venta_local");
        btn_venta_local.addEventListener("click" ,() => {
            $("#btn_venta_local").parent().addClass("active");
            $("#btn_exportacion").parent().removeClass("active");
            $("#btn_anticipos").parent().removeClass("active");
            $("#btn_no_docimic").parent().removeClass("active");
            if($("#content_add_doc").is(":visible")){
                $("#content_add_doc").hide();
            }
        });
    }

    if(document.getElementById("btn_exportacion") !== null){
        const btn_exportacion = document.getElementById("btn_exportacion");
        btn_exportacion.addEventListener("click" ,() => {
            $("#btn_exportacion").parent().addClass("active");
            $("#btn_venta_local").parent().removeClass("active");
            $("#btn_anticipos").parent().removeClass("active");
            $("#btn_no_docimic").parent().removeClass("active");
            if($("#content_add_doc").is(":visible")){
                $("#content_add_doc").hide();
            }
        });
    }

    if(document.getElementById("btn_anticipos") !== null){
        const btn_anticipos = document.getElementById("btn_anticipos");
        btn_anticipos.addEventListener("click" ,() => {
            $("#btn_anticipos").parent().addClass("active");
            $("#btn_venta_local").parent().removeClass("active");
            $("#btn_exportacion").parent().removeClass("active");
            $("#btn_no_docimic").parent().removeClass("active");
            $("#content_add_doc").show();
        });
    }

    if(document.getElementById("btn_no_docimic") !== null){
        const btn_no_docimic = document.getElementById("btn_no_docimic");
        btn_no_docimic.addEventListener("click" ,() => {
            $("#btn_no_docimic").parent().addClass("active");
            $("#btn_anticipos").parent().removeClass("active");
            $("#btn_venta_local").parent().removeClass("active");
            $("#btn_exportacion").parent().removeClass("active");
            if($("#content_add_doc").is(":visible")){
                $("#content_add_doc").hide();
            }
        });
    }

    // VALIDACION DE DOC FINALES ====================================================== //
    $("#content_add_doc").hide();

    if($("#content_add_doc").is(":visible")){
        document.getElementById("ck_add_doc_out").checked = true;
        if(document.getElementById("ck_add_doc_out") !== null){
            const ck_add_doc_out = document.getElementById("ck_add_doc_out");
            ck_add_doc_out.addEventListener("click" ,() => {
                document.getElementById("ck_add_doc_out").checked = true;
                document.getElementById("ck_add_doc_in").checked = false;
            });
        }

        if(document.getElementById("ck_add_doc_in") !== null){
            const ck_add_doc_in = document.getElementById("ck_add_doc_in");
            ck_add_doc_in.addEventListener("click" ,() => {
                document.getElementById("ck_add_doc_in").checked = true;
                document.getElementById("ck_add_doc_out").checked = false;
            });
        }
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
            boletas.save();
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
            boletas.addImp();
        });
    }

    if(document.getElementById("item_price") !== null){
        const item_price = document.getElementById("item_price");
        item_price.addEventListener("change" ,() => {
            boletas.addImp();
        });
    }
    
    if(document.getElementById("item_quantity") !== null){
        const item_quantity = document.getElementById("item_quantity");
        item_quantity.addEventListener("change" ,() => {
            boletas.addImp();
        });
    }

});