Session.setDefault('msg', false);

Template.makeAdmin.events({
    'click #doMakeAdmin' : function(e,t){
        var username =t.find('#username').value;
        var password =t.find('#password').value;

        var admin = {
            username : username,
            password : password
        };

        Meteor.call('makeAdmin', admin, 'admin', function(err,id){
            if(err){
                Session.set('msg', err.message);
            }else{
                Session.set('msg', 'Sukses');
            }
        });
    }
});