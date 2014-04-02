(function(define){
    define([
        'angular',
        'angularRoute',
        'angularResource',
        'services/services',
        'controllers/controllers_bootstrap'
    ],

        function(angular,angularRoute,angularResource,services,controllers){
            console.log(services);
            console.log(controllers);
            var module  =   angular.module('ContactManager', ['ngRoute','ngResource','ContactManager.services','ContactManager.controllers']);
            console.log(module);
            return module;
        }
    );


})(define)


