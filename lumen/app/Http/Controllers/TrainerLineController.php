<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\TrainerLine;


class TrainerLineController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $trainerline = TrainerLine::join('trainers', 'trainer_lines.trainer', '=', 'trainers.id')->join('lines', 'trainer_lines.line', '=', 'lines.id')->select('trainer', 'line', "name", "species")->orderBy('trainer_lines.id', 'asc')->get();
        return response()->json($trainerline);
    }
}

