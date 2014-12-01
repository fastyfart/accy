/**
 * Created by sherlock on 01/12/14.
 */

dashboardController = appController.extend({
    template : 'dashboard',
    data : {
        header : 'Dashboard'
    },
    action : function () {
        this.render();
    }
});