<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\twfSuggestion;


class twfSuggestionController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function save(Request $request) {
        $this->validate($request, [
            'shiny' => 'required',
            'pokemon1' => 'required',
            'pokemon2' => 'required',
            'pokemon3' => 'required',
            'pokemon4' => 'required',
            'pokemon5' => 'required',
            'pokemon6' => 'required',
            'pokemon7' => 'required',
            'pokemon8' => 'required',
            'pokemon9' => 'required',
            'pokemon10' => 'required',
            'pokemon11' => 'required',
            'pokemon12' => 'required',
            'pokemon13' => 'required',
            'pokemon14' => 'required',
            'pokemon15' => 'required',
            'pokemon16' => 'required',
            'pokemon17' => 'required',
            'pokemon18' => 'required',
            'pokemon19' => 'required',
            'pokemon20' => 'required',
            'pokemon21' => 'required',
            'pokemon22' => 'required',
            'pokemon23' => 'required',
            'pokemon24' => 'required',
            'pokemon25' => 'required',
        ]);
        $suggestion = twfSuggestion::create($request->all());
        return response()->json($suggestion, 201);
    }
}

