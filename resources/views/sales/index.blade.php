@extends('index')

@section('content')
<div class="pull-left breadcrumb_admin clear_both">
	<div class="pull-left page_title theme_color">
		<h2 class="">Módulo de Emisión de Facturas</h2>
	</div>
	<div class="pull-right">
		<ol class="breadcrumb">
			<li><a href="/">Inicio</a></li>
			<li class="active">Emitir Facturas</li>
		</ol>
	</div>
</div>
<div class="container">
	<div class="row">
		
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="col-md-8">
				<div class="panel panel-default">
					<div class="panel-body">
						<ul class="nav nav-tabs">
							<li class="active"><a id="btn_venta_local" href="javascript:void(0);">Venta Local</a></li>
							<li><a id="btn_exportacion" href="javascript:void(0);">Exportación</a></li>
							<li><a id="btn_anticipos" href="javascript:void(0);">Anticipos</a></li>
							<li><a id="btn_no_docimic" href="javascript:void(0);">No Domiciliados</a></li>
						</ul>
						<br/>
						<form id="frm_sales" role="form">
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-6">
										<div class="form-group">
											<label>Fecha de Emisión:</label>
											<input type="date" name="fec_emision" id="fec_emision" 
													class="form-control">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Nro. Serie:</label>
											<select id="nro_serie" name="nro_serie" 
													class="form-control required" data-name="Número de Serie">
												<option value="">Seleccionar</option>
												<option value="F001">F001</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-6">
										<div class="form-group">
											<label>Ingresar DNI o RUC</label>
											<input type="text" name="customer_id" id="customer_id" 
													class="form-control">
											<input type="hidden" name="cliente_id" id="cliente_id"/>
										</div>
									</div>
									<div class="col-md-1">
										<div class="form-group">
											<br/>
											<a id="btn_buscar_cliente" href="javascript:void(0);" class="btn btn-primary"
												title="Buscar Cliente">
												<i class="fa fa-search"></i>
											</a>
										</div>
									</div>
									<div class="col-md-1">
										<div class="form-group">
											<br/>
											<a href="javascript:void(0);" class="btn btn-primary" data-toggle="modal" data-target="#modal_customer"
												title="Crear Nuevo Cliente">
												<i class="fa fa-plus"></i>
											</a>
										</div>
									</div>
									<div class="col-md-4">
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Nombre o Razón Social</label>
											<input type="text" name="customer_name" 
													id="customer_name" 
													class="form-control" disabled="true">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-6">
										<div class="form-group">
											<label>Tipo doc.:</label>
											<select id="tipo_doc" name="tipo_doc" 
													class="form-control" disabled="true">
													<option value="">Seleccionar</option>
													<option value="DNI">DNI</option>
													<option value="RUC">RUC</option>
													<option value="CE">Carnet de Extranjeria</option>
											</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Nro. Documento:</label>
											<input type="text" name="nro_doc" id="nro_doc" 
													class="form-control" disabled="true">
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Dirección:</label>
											<input type="text" name="direccion" id="direccion" 
													class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-6">
										<div class="form-group">
											<label>Condición de Pago:</label>
											<select id="con_pago" name="con_pago" 
													class="form-control" >
												<option value="">Seleccionar</option>
												<option value="001">CONTADO</option>
												<option value="000">NO ASIGNADO</option>
												<option value="002">CRÉDITO A 7 DÍAS</option>
												<option value="003">CRÉDITO A 15 DÍAS</option>
												<option value="008">CRÉDITO A 20 DÍAS</option>
												<option value="010">CRÉDITO A 21 DÍAS</option>
												<option value="011">CRÉDITO A 25 DÍAS</option>
												<option value="004">CRÉDITO A 30 DÍAS</option>
												<option value="005">CRÉDITO A 60 DÍAS</option>
												<option value="006">CRÉDITO A 90 DÍAS</option>
												<option value="007">CRÉDITO A 120 DÍAS</option>
											</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Fecha de Vencimiento:</label>
											<input type="date" name="fec_vencimiento" 
													id="fec_vencimiento" 
													class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-6">
										<div class="form-group">
											<label>Forma de Pago:</label>
											<select id="form_pago" name="form_pago" 
													class="form-control" >
												<option value="">Seleccionar</option>
												<option value="000">NO ASIGNADO</option>
												<option value="001">EFECTIVO</option>
												<option value="002">CHEQUE</option>
												<option value="003">LETRA</option>
												<option value="004">TARJETA DE CRÉDITO</option>
												<option value="005">TARJETA DE DÉBITO</option>
												<option value="006">DEPOSITO BANCARIO</option>
												<option value="007">TRANSFERENCIA INTERBANCARIA</option>
											</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Nro. Orden Compra:</label>
											<input type="text" name="nro_orden_compra" 
													id="nro_orden_compra" 
													class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-6">
										<div class="form-group">
											<label>Moneda:</label>
											<select id="moneda" name="moneda" 
													class="form-control" >
												<option value="">Seleccionar</option>
												<option value="PEN">Nuevo Sol</option>
												<option value="USD">US Dollar</option>
												<option value="EUR">Euro</option>
											</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Tipo de Cambio:</label>
											<input type="number" name="tipo_cambio" id="tipo_cambio" class="form-control"
													value="0" min="0" step="0.01"/>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div id="content_det" class="col-md-6">
										<div class="form-group">
											<label>Detracción:</label>
											<label class="checkbox-inline">
												<input id="ck_det_in" name="ck_det_in" type="checkbox" value="">Si
											</label>
											<label class="checkbox-inline">
												<input id="ck_det_out" name="ck_det_out" type="checkbox" value="">No
											</label>
										</div>
									</div>
									<div id="content_val_det" class="col-md-6">
										<div class="form-group">
											<label>Valor de Detracción (%):</label>
											<select id="val_detraccion" name="val_detraccion" class="form-control" >
												<option value="">Seleccionar</option>
												<option value="1" data-monto="0.10">10.00</option>
												<option value="2" data-monto="0.04">4.00</option>
												<option value="3" data-monto="0.12">12.00</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div id="content_add_doc" class="col-md-6">
										<div class="form-group">
											<label>Doc. Final:</label>
											<label class="checkbox-inline">
												<input id="ck_add_doc_in" name="ck_add_doc_in" type="checkbox" value="">Si
											</label>
											<label class="checkbox-inline">
												<input id="ck_add_doc_out" name="ck_add_doc_out" type="checkbox" value="">No
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-3">
										
									</div>
									<div class="col-md-5"></div>
									<div class="col-md-2">
										<button id="btn_cancel_sales" type="button" 
												class="btn btn-primary btn_rigth">
											Cancelar
										</button>
									</div>
									<div class="col-md-2">
										<button id="btn_save_sales" type="button" 
												class="btn btn-primary btn_rigth">
											Guardar
										</button>
									</div>
								</div>
							</div>
							<input type="hidden" id="_item_list" name="_item_list"/>
							<input type="hidden" id="_token" name="_token" value="{{ csrf_token() }}"/>
						<br/>
						<div id="msg_sales_validate"></div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default">
					<div class="panel-body">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label>Tipo de Guia:</label>
										<select class="form-control" id="tipo_guia" name="tipo_guia" >
											<option value="" >Seleccionar</option>
											<option value="1" >Guia de Prueba</option>
										</select>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label>Nro. de Guia:</label>
										<input type="text" name="nro_guia" id="nro_guia" class="form-control" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<textarea name="desc_guia" id="desc_guia" cols="30" rows="5" class="form-control"></textarea>
									</div>
								</div>
							</div>
						</form>
						<br/>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Total Igv:</label>
									<input type="text" name="total_igv" id="total_igv" class="form-control"
											value="0" disabled="true"/>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<label>Total Importe:</label>
									<input type="text" name="total_importe" id="total_importe" class="form-control"
											value="0" disabled="true"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-body">
						<form id="frm_add_item" role="form">
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-8">
										<div class="form-group">
											<label>Producto o Servicio</label>
											<input type="text" name="item_name" id="item_name"
													class="form-control"/>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Código</label>
											<input type="text" name="item_code" id="item_code"
													class="form-control"/>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Cantidad</label>
											<input type="number" name="item_quantity" id="item_quantity"
													class="form-control add_imp" value="0" min="0" step="0.01"/>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="col-md-2">
										<div class="form-group">
											<label>U. de Medida</label>
											<select name="item_unit" id="item_unit" class="form-control">
												<option value="">Seleccionar</option>
												<option value="BG">BOLSA</option>
												<option value="BJ">BALDE</option>
												<option value="BO">BOTELLAS</option>
												<option value="BX">CAJA</option>
												<option value="CA">LATAS</option>
												<option value="CJ">CONOS</option>
												<option value="CT">CARTON</option>
												<option value="CY">CILINDRO</option>
												<option value="GRM">GRAMO</option>
												<option value="KGM">KILOGRAMO</option>
												<option value="KT">KIT</option>
												<option value="KTM">KILOMETRO</option>
												<option value="LBR">LIBRAS</option>
												<option value="LTR">LITRO</option>
												<option value="M4">VALOR MONETARO</option>
												<option value="MLL">MILLARES</option>
												<option value="MTR">METRO</option>
												<option value="NIU">UNIDAD (BIENES)</option>
												<option value="SET">JUEGO</option>
												<option value="UM">MILLON DE UNIDADES</option>
												<option value="ZZ">UNIDAD (SERVICIOS)</option>
											</select>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Afectación</label>
											<select name="item_afec" id="item_afec" class="form-control add_imp">
												<option value="">Seleccionar</option>
												<option value="10">Gravado – Oneroso</option>
												<option value="11">Gravado – Premios</option>
												<option value="12">Gravado – Donación</option>
												<option value="13">Gravado – Retiro</option>
												<option value="14">Gravado – Publicidad</option>
												<option value="15">Gravado – Bonificaciones</option>
												<option value="16">Gravado – Entrega a trabajadores</option>
												<option value="20">Exonerado – Oneroso</option>
												<option value="30">Inafecto – Oneroso</option>
												<option value="31">Inafecto – Bonificación</option>
												<option value="32">Inafecto – Retiro</option>
												<option value="33">Inafecto – Muestras médicas</option>
												<option value="34">Inafecto – Convenio colectivo</option>
												<option value="35">Inafecto – Premio</option>
												<option value="36">Inafecto – Publicidad</option>
												<option value="17">Gravado – IVAP Oneroso</option>
												<option value="21">Exonerado – Transferencia Gratuita</option>
											</select>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Val. de Venta</label>
											<input type="number" name="item_price" id="item_price"
													class="form-control add_imp" value="0" min="0" step="0.01"/>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Isc.</label>
											<input type="number" name="item_isc" id="item_isc"
													class="form-control" value="0" min="0" step="0.01" disabled="true"/>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Igv.</label>
											<input type="number" name="item_igv" id="item_igv"
													class="form-control" value="0" min="0" step="0.01" disabled="true"/>
										</div>
									</div>
									<div class="col-md-2">
										<div class="form-group">
											<label>Importe</label>
											<input type="number" name="item_import" id="item_import"
													class="form-control" value="0" min="0" step="0.01" disabled="true"/>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-2">
								<button id="btn_add_items" type="button" class="btn btn-primary btn_left">
									Agregar Item
								</button>
							</div>
							<div class="col-md-2">
								<button id="btn_clean_items" type="button" class="btn btn-primary btn_left">
									Limpiar
								</button>
							</div>
						</form>
						<br/><br/>
						<div class="row">
							<div class="col-md-12">
								<table id="tbl_items" class="table table-hover table-striped">
									<thead>
										<tr>
											<th><center>Item</center></th>
											<th><center>Código</center></th>
											<th><center>Cantidad</center></th>
											<th><center>Unid. de Med.</center></th>
											<th><center>Val. Venta</center></th>
											<th><center>Igv.</center></th>
											<th><center>Importe</center></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="7">
												<center>
													No se encontraron resultados
												</center>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="6" style="text-align: right;">
												TOTAL: 
											</td>
											<td>
												<center>
													0.00
												</center>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- MODAL DE CLIENTE -->
<!-- Modal -->
<div class="modal fade" id="modal_customer" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Registrar Cliente</h4>
        </div>
        <div class="modal-body">
          <form id="frm_cliente" role="form">
		  	<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="tipo_doc">Tipo de Documento:</label>
						<select name="tipo_doc" id="tipo_doc" class="form-control">
							<option value="">Seleccionar</option>
							<option value="DNI">DNI</option>
							<option value="DNI">RUC</option>
							<option value="CE">Carnet de Extranjeria</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="nro_doc">Nro. de Documento:</label>
						<input type="text" name="nro_doc" id="nro_doc" class="form-control">
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label for="nombre">Nombre o razón social</label>
						<input type="text" name="nombre" id="nombre" class="form-control">
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label for="email">Email:</label>
						<input type="text" name="email" id="email" class="form-control">
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label for="tipo_envio_mail">Tipo de Correo:</label>
						<select name="tipo_envio_mail" id="tipo_envio_mail" class="form-control">
							<option value="">Seleccionar</option>
							<option value="PER">Personal</option>
							<option value="EMP">Empresarial</option>
						</select>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<br/>
						<button type="button" class="btn btn-primary">+</button>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label for="direccion">Dirección</label>
						<input type="text" name="direccion" id="direccion" class="form-control">
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label for="comentario">Comentarios</label>
						<input type="text" name="comentario" id="comentario" class="form-control">
					</div>
				</div>
			</div>
			<input type="hidden" id="_tokenCustomer" name="_tokenCustomer" value="{{ csrf_token() }}"/>
		  </form>
		  <div id="msg_customer"></div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn_cerrar_frm_cliente" class="btn" >Cerrar</button>
		  <button type="button" id="btn_guardar_cliente" class="btn btn-primary">Guardar</button>
        </div>
      </div>
	</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="{{ asset('/lib/customer/customerModel.js') }}"></script>
<script src="{{ asset('/lib/sales/salesModel.js') }}"></script>
<script src="{{ asset('/lib/sales/salesController.js') }}"></script>
@endsection
