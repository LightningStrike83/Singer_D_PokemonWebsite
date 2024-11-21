<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Shiny;


class ShinyController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $shiny = Shiny::select('id', 'name', 'number')->orderBy('number', 'asc')->get();
        return response()->json($shiny);
    }

    public function getOne($id){
        $shiny = Shiny::find($id);
        return response()->json($shiny);
    }
}

