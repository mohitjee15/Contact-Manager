'use strict';

angular.module('angularYoTutDummyApp')
    .factory('Contact',function($resource){
        return $resource('http://local.angular.com/contacts/:id'+'.json',{id:'@id'});
    })

      .controller('MainCtrl', function ($scope, Contact) {

            $scope.contacts =   Contact.query();

        })

        .controller('Edit', function($scope, $routeParams, $location, Contact){
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

        })

            .controller('Add',function($scope,  $routeParams,   $location, Contact){

                $scope.contact=   new Contact({});
                $scope.addContact   =   function(){

                    $scope.contact.$save(function(updated_contact){

                        console.log(updated_contact);
                        //$scope.contacts[$routeParams.index-1] =  $scope.contact;
                        $location.path('/');
                    });

                }


            });
