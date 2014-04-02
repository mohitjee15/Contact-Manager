define(['services/services','angularRoute','angular'],function(){

var AddContact  =   function($scope,  $routeParams,   $location, Contact){

    $scope.contact=   new Contact({});
    $scope.addContact   =   function(){

        $scope.contact.$save(function(updated_contact){

            console.log(updated_contact);
            //$scope.contacts[$routeParams.index-1] =  $scope.contact;
            $location.path('/');
        });

    }
}

return ['$scope',  '$routeParams',   '$location', 'Contact',AddContact];
});