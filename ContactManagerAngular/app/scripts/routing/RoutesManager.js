
define(['app','angularRoute'],function(app){

    console.log('inside Routes');
    console.log(app);
    var module  = app.config(['$routeProvider', function($routeProvider){


        $routeProvider
            .when('/contact/edit/:index',{
                'templateUrl':  "/views/edit.html",
                'controller': 'EditContact'
            })

            .when('/',{
                'templateUrl':  "/views/list.html",
                'controller': 'MainCtrl'
            })

            .when('/contact/add',{
                'templateUrl':"/views/add.html",
                'controller':'AddContact'
            });
    }]);

    console.log('inside Routes second');
    console.log(module);

    return module;

});