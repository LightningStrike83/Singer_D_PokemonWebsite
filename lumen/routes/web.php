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
$router->get("/gen/all", "SpeciesController@getAll");
$router->get("/gen/all-no-alt", "SpeciesController@getAllNoAlt");
$router->get("/gen/all-no-alt/dex", "SpeciesController@getAllNoAltDex");
$router->get("/game/sw-sh", "SpeciesController@getSWSH");
$router->get("/game/la", "SpeciesController@getLA");
$router->get("/game/scar-vio", "SpeciesController@getScarVio");
$router->get("/custom/regional", "SpeciesController@getRegionals");
$router->get("/custom/starter", "SpeciesController@getStarters");
$router->get("/custom/legendary", "SpeciesController@getLegendaries");
$router->get("/custom/mega", "SpeciesController@getMegas");
$router->get("/custom/gmax", "SpeciesController@getGMax");
$router->get("/custom/dev-fav", "SpeciesController@getDevFavs");
$router->get("/gen/{generation}", "SpeciesController@getGeneration");
$router->get("/custom/ash", "SpeciesController@getAshPokes");
$router->get("/custom/champion", "SpeciesController@getChampion");
$router->get("/types/{type}", "SpeciesController@getTypes");
$router->post("/guess-who/add", "GuessWhoGameController@save");
$router->get("/guess-who/{id}", "GuessWhoGameController@getOne");