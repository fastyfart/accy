/**
 * Created by sherlock on 01/12/14.
 */

appController = RouteController.extend({
   onBeforeAction : function () {
       if(!Meteor.userId()){
           this.render('login');
       }else{
           this.next();
       }
   }
});