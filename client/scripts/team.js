Template.teams.helpers({
  name: function() {
    return Meteor.user().profile.teams;
  }
})
