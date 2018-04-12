<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cliente;

class ComboController extends Controller
{
    public function clientes()
    {
    	return Cliente::all();
    }
}
