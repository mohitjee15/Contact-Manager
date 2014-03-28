'use strict';

angular
    .module('angularYoTutDummyApp', ['ngRoute','ngResource'])

        .config(function($routeProvider){

            $routeProvider
                .when('/contact/edit/:index',{
                    'templateUrl':  "/views/edit.html",
                    'controller': 'Edit'
                })

                    .when('/',{
                        'templateUrl':  "/views/list.html",
                        'controller': 'MainCtrl'
                    })

                        .when('/contact/add',{
                            'templateUrl':"/views/add.html",
                            'controller':'Add'
                        });
});
