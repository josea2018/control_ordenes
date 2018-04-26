<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Iventario as Authenticatable;
use Illuminate\Database\Eloquent\Model;



class Orden extends Model
{

   use Notifiable;



    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'nota_recibido', 'fecha_recibido', 'nota_entregado', 'fecha_entregado', 'estado', 'cedula_cliente', 'costo', 'firma', 'usuario'
    ];



//md5('$contrasenna')
    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('id', '=', intval($query))
                  ->orWhere('cedula_cliente', 'ilike', "%$query%")->get();
    }
}