/**
 * Created by sherlock on 01/12/14.
 */

Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading'
});

Router.route('/', {
    name : 'dashboard',
    controller : 'dashboardController'
});

Router.route('login', {
    name : 'login',
    controller : 'loginController'
});