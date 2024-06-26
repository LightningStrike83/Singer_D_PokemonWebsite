<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get("/lines", "LineController@getAll");
$router->get("/lines/{id}", "LineController@getOne");
$router->get("/trainer-lines", "TrainerLineController@getAll");
$router->get("/trainer-lines/{id}", "TrainerLineController@getTrainer");
$router->get("/species", "SpeciesController@getAll");
$router->post("/guess-who/add", "GuessWhoGameController@save");
$router->get("/guess-who/{id}", "GuessWhoGameController@getOne");