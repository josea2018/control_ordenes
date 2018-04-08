<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'type', 'status'
    ];
//md5('$contrasenna')
    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('name', 'ilike', "%$query%")
                  ->orWhere('email', 'ilike', "%$query%")
                  ->orWhere('password', 'ilike', "%$query%");
    }

}
