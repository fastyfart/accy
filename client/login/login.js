Session.setDefault('err', false);

Template.login.events({
    'click #doLogin' : function (e, t) {
        var username = t.find('#username').value;
        var password = t.find('#password').value;

        Meteor.loginWithPassword(username, password, function(err){
            if(!err){
                route.go('dashboard');
            }else{
                Session.set('err', err.message);
            }
        })
    }
});

Template.login.helpers({
    err : function () {
        return Session.get('err');
    }
});