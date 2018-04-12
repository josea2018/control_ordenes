<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Iventario as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cedula', 'nombre', 'telefono', 'direccion'
    ];
//md5('$contrasenna')
    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('cedula', 'ilike', "%$query%")
                  ->orWhere('nombre', 'ilike', "%$query%")
                  ->orWhere('telefono', 'ilike', "%$query%")
                  ->orWhere('direccion', 'ilike', "%$query%")->get();
    }

}