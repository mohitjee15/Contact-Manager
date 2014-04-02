require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute : '../bower_components/angular-route/angular-route',
        angularMocks : '../bower_components/angular-mocks/angular-mocks',
        'angularResource': '../bower_components/angular-resource/angular-resource',
        jquery:'../bower_components/jquery/jquery',
        'app':"app",
        services_bootstrap:"services/services_bootstrap",
        controllers_bootstrap:"controllers/controllers_bootstrap",
        routes:"routing/RoutesManager",
        bootstrap : "../bower_components/bootstrap/dist/js/bootstrap",
        'ui.bootstrap':'../bower_components/angular-bootstrap/ui-bootstrap.min'
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': {
            'deps':['angular'],
            'exports':'angular'
        },
        'angularResource':{
            'deps':['angular'],
            'exports':'angular'
        },
        'app'   :   {'deps':['angular','angularResource','angularRoute']},
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'jquery': {
            exports: 'jquery'
        },
        'ui.bootstrap': { deps:['angular', 'jquery']},
        'bootstrap' :{deps:['jquery']}
    },

    waitSeconds : 60
});


require( [
    'angular',
    'app',
    'routes',
    'jquery',
    'bootstrap',
    'ui.bootstrap'
], function(angular, app, route_manager, jquery) {

    angular.element().ready(function() {
        angular.bootstrap(document.getElementsByTagName('body')[0],['ContactManager']);
    });


});

