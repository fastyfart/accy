/**
 * Created by sherlock on 01/12/14.
 */

appController = RouteController.extend({
   onBeforeAction : function () {
       if(!Meteor.userId()){
            Meteor.subscribe('setup');
            var firstTime = Setup.find().count();
           if(firstTime === 0){
               this.render('install');
           }else{
               this.render('login');
           }

       }else{
           this.next();
       }
   }
});