/**
 * Created by sherlock on 01/12/14.
 */

loginController = appController.extend({
    template : 'login',
    data : {
        header : 'Login'
    },
    action : function () {
        this.render();
    }
});