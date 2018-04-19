<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Photo extends Model
{
   
    protected $fillable = [
        'id_ordens', 'nombre'
    ];


    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('id_ordens', '=', intval($query))
                  ->orWhere('nombre', 'ilike', "%$query%")->get();
    }

 
}