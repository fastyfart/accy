Meteor.publish('setup', function () {
    return Setup.find();
});