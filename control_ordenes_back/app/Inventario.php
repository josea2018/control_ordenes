<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Iventario as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Inventario extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 'descripcion', 'cantidad'
    ];
//md5('$contrasenna')
    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('nombre', 'ilike', "%$query%")
                  ->orWhere('descripcion', 'ilike', "%$query%");
    }

}