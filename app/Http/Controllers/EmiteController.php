<?php

namespace App\Http\Controllers;

use App\Boletas;
use Validator;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class EmiteController extends Controller{

    public function __construct(){
        $this->middleware('auth');
    }

    public function emite(){
        return view('emite.emite');
    }

}