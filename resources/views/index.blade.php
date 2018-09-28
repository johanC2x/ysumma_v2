<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Laravel</title>
		<!--
		<link href="{{ asset('/css/app.css') }}" rel="stylesheet">
		-->

		<!-- NUEVOS CSS -->
		<link href="{{ asset('/css/font-awesome.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/css/animate.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/css/admin.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('/css/jquerysctipttop.css') }}" rel="stylesheet" type="text/css">

		<!-- Fonts -->
		<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body class="light_theme  fixed_header left_nav_fixed">
		
		<div class="wrapper">
  			<div class="header_bar">
  				<div class="brand">
			      	<div class="logo" style="display:block">
						<span class="theme_color">YSUMMA</span>
			      	</div>
			      	<div class="small_logo" style="display:none">
			      		<img src="{{ asset('images/s-logo.png') }}" width="50" height="47" alt="s-logo" /> 
			      		<img src="{{ asset('images/r-logo.png') }}" width="122" height="20" alt="r-logo" />
			      	</div>
			    </div>
			    <div class="header_top_bar">
			    	<a href="javascript:void(0);" class="menutoggle"> <i class="fa fa-bars"></i> </a>
			    	<div class="top_left">
				        <div class="top_left_menu">
				          	<ul>
					            <li> 
					            	<a href="javascript:void(0);"><i class="fa fa-repeat"></i></a> 
					            </li>
				            	<li class="dropdown"> 
					              	<a data-toggle="dropdown" href="javascript:void(0);"> 
					              		<i class="fa fa-th-large"></i> 
					              	</a>
				        			<ul class="drop_down_task dropdown-menu" style="margin-top:39px">
				        				<div class="top_left_pointer"></div>
				        				<li>
						                    <div class="checkbox">
						                      <label>
						                        <input type="checkbox" name="remember">Remember me 
						                      </label>
						                    </div>
				                  		</li>
				        				<li> 
				        					<a href="help.html"><i class="fa fa-question-circle"></i> Help</a> 
				        				</li>
				        				<li> 
				        					<a href="settings.html"><i class="fa fa-cog"></i> Setting </a>
				        				</li>
				        				<li> 
				        					<a href="login.html"><i class="fa fa-power-off"></i> Logout</a> 
				        				</li>
				        		  	</ul>
								</li>
				          	</ul>
						</div>
					</div>
					<!--
					<a href="javascript:void(0);" class="add_user" data-toggle="modal" data-target="#myModal"> 
      					<i class="fa fa-plus-square"></i> <span> New Task</span> 
      				</a>
					-->
      				<div class="top_right_bar">
				        <div class="user_admin dropdown"> 
				          <a href="javascript:void(0);" data-toggle="dropdown">
				          	<img src="{{ asset('images/user.png') }}" />
				          	<span class="user_adminname">John Doe</span> 
				          	<b class="caret"></b> 
				          </a>
				          	<ul class="dropdown-menu">
				            	<div class="top_pointer"></div>
				            	<li> 
				            		<a href="profile.html"><i class="fa fa-user"></i> Profile</a> 
				            	</li>
				            	<li> 
				            		<a href="help.html"><i class="fa fa-question-circle"></i> Help</a> 
				            	</li>
				            	<li> 
				            		<a href="settings.html"><i class="fa fa-cog"></i> Setting </a>
				            	</li>
				            	<li> 
				            		<a href="login.html"><i class="fa fa-power-off"></i> Logout
				            		</a>
				            	</li>
				          	</ul>
				        </div>        
					</div>

			    </div>
  			</div>

  			<div class="inner">
		    	<div class="left_nav">
		      		<div class="search_bar"> <i class="fa fa-search"></i>
		        		<input name="" type="text" class="search" placeholder="Search Dashboard..." />
		      		</div>
				    <div class="left_nav_slidebar">
				    	<ul>
							<li class="left_nav_active theme_border">
								<a href="javascript:void(0);">
									<i class="fa fa-home"></i> Inicio 
									<span class="left_nav_pointer"></span> 
									<span class="plus"><i class="fa fa-plus"></i></span> 
								</a>
				          	</li>
								<li class="left_nav_active theme_border">
									<a href="javascript:void(0);">
										<i class="fa fa-home"></i> Emitir 
										<span class="left_nav_pointer"></span> 
										<span class="plus"><i class="fa fa-plus"></i></span> 
									</a>
									<ul class="opened" style="display:block">
										<li> 
											<a href="index.html"> <span>&nbsp;</span> 
												<i class="fa fa-circle theme_color"></i> 
												<b class="theme_color">Factura</b> 
											</a> 
										</li>
									</ul>
								</li>
				        </ul>
					</div>
		    	</div>
		    	<div class="contentpanel">
		    		
					<div class="pull-left breadcrumb_admin clear_both">
			          	<div class="pull-left page_title theme_color">
			            	<h1>Inicio</h1>
			            	<h2 class="">Emitir Facturas</h2>
			          	</div>
		          		<div class="pull-right">
		            		<ol class="breadcrumb">
		              			<li><a href="#">Inicio</a></li>
		              			<li class="active">Emitir Facturas</li>
		            		</ol>
		          		</div>
		        	</div>

		        	<!-- CONTENEDOR DE APLICACION -->
		        		@yield('content')
		        	<!-- / CONTENEDOR DE APLICACION -->

		      	</div>
		    </div>
  		</div>

		<script src="{{ asset('/js/jquery-2.1.0.js') }}"></script>
		<script src="{{ asset('/js/bootstrap.min.js') }}"></script>
		<script src="{{ asset('/js/bootstrapValidator.min.js') }}"></script>
		<script src="{{ asset('/js/jquery.slimscroll.min.js') }}"></script>
		<script src="{{ asset('/js/jquery.sparkline.js') }}"></script>
		<script src="{{ asset('/js/moment.js') }}"></script>
		<script src="{{ asset('/lib/util.js') }}"></script>
	</body>
</html>
