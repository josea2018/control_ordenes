<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cliente;
use App\Condition;
use App\User;

class ComboController extends Controller
{
	/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function clientesReturn(Request $request)
    {
    	//return Cliente::all();
    	return Cliente::search($request->q);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function conditionsReturn(Request $request)
    {
        return Condition::search($request->q);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function usersReturn(Request $request)
    {
        return User::search($request->q);
    }
}
