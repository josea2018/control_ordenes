<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Condition extends Model
{
   
    protected $fillable = [
        'descripcion'
    ];

 
    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('descripcion', 'ilike', "%$query%")->get();
               
    }
}