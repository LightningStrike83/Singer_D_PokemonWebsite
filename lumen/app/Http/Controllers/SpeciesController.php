<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Species;


class SpeciesController extends Species {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $species = Species::select('number', 'name')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }
}

