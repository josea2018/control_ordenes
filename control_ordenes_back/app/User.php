<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class User extends Model
{
   
    protected $fillable = [
        'name', 'email', 'password', 'type', 'status'
    ];

 
    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('name', 'ilike', "%$query%")
                  ->orWhere('email', 'ilike', "%$query%")
                  ->orWhere('password', 'ilike', "%$query%")->get();
    }
}
