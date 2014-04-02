define(['angular',
    'controllers/MainCtrl',
    'controllers/AddContact',
    'controllers/EditContact'],function(angular,MainCtrl,AddContact,EditContact){


    console.log(angular);
    console.log(MainCtrl);
    console.log(AddContact);
    console.log(EditContact);

    return angular.module('ContactManager.controllers',[]).controller('MainCtrl', MainCtrl)
        .controller('AddContact', AddContact)
        .controller('EditContact', EditContact);
});