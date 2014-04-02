define(['services/services','angularRoute','angular'],function(){


        var EditContact =   function($scope, $routeParams, $location, Contact){

            $scope.contacts =   Contact.query();
            $scope.contact  =   $scope.contacts[$routeParams.index];

            var singleContact   =   Contact.get({id:$routeParams.index});

            $scope.contact=   singleContact;

            $scope.index    =   $routeParams.index;

            $scope.save =   function(){
                $scope.contact.$save(function(updated_contact){
                    $scope.contact =   Contact.get({id:$routeParams.index});
                    console.log($scope.contacts);
                    $scope.contacts[$routeParams.index-1] =  $scope.contact;
                    console.log(updated_contact);
                });
            };

            $scope.delete =   function(){
                $scope.contact.$delete({id:$routeParams.index},function(response){
                    console.log(response);
                    //$scope.contacts.splice($routeParams.index-1,1);
                    $location.path('/').replace();
                });

            }

        }

        return ['$scope', '$routeParams', '$location', 'Contact', EditContact];
});
