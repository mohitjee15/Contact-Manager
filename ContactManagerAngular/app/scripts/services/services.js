define(['angular','angularResource'],function(angular){
    var module  =   angular.module('ContactManager.services',['ngResource']).factory('Contact',
            function($resource) {
                return $resource('http://local.angular.com/contacts/:id' + '.json', {id: '@id'});
            });
        }
    );

