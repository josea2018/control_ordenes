<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = [
        'cedula', 'nombre', 'contrasenna'
    ];

    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('cedula', 'ilike', "%$query%")
                  ->orWhere('nombre', 'ilike', "%$query%")
                  ->orWhere('contrasenna', 'ilike', "%$query%");
    }
}