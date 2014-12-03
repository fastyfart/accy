Meteor.methods({
    makeAdmin : function(admin, roles){
        var id = Accounts.createUser({
            username : admin.username,
            password : admin.password
        });

        Roles.addUsersToRoles(id, roles);
        if(Meteor.roles.find({})){
            return true;
        }else{
            return false;
        }
    }
});