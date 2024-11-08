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
$router->get("/species/all", "SpeciesController@getAll");
$router->get("/species/all-no-alt", "SpeciesController@getAllNoAlt");
$router->get("/species/sw-sh", "SpeciesController@getSWSH");
$router->get("/species/la", "SpeciesController@getLA");
$router->get("/species/scar-vio", "SpeciesController@getScarVio");
$router->get("/species/regionals", "SpeciesController@getRegionals");
$router->get("/species/starters", "SpeciesController@getStarters");
$router->get("/species/legendary", "SpeciesController@getLegendaries");
$router->get("/species/mega", "SpeciesController@getMegas");
$router->get("/species/gmax", "SpeciesController@getGMax");
$router->get("/species/dev-fav", "SpeciesController@getDevFavs");
$router->get("/species/{generation}", "SpeciesController@getGeneration");
$router->get("/species/ash", "SpeciesController@getAshPokes");
$router->get("/types/{type}", "SpeciesController@getTypes");
$router->post("/guess-who/add", "GuessWhoGameController@save");
$router->get("/guess-who/{id}", "GuessWhoGameController@getOne");