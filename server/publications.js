Meteor.publish('userData', function () {
  return Meteor.users.find();
})
