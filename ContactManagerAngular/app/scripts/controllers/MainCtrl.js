define(['services/services','angularRoute','angular'],function(){

    var MainCtrl    = function ($scope, Contact) {
        $scope.contacts =   Contact.query();
    }

    return ['$scope','Contact',MainCtrl];

});
