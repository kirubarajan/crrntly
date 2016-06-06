Template.profile.helpers({
  
  'team': function() {

    var teams = [];

    for (var i = 0; i < Meteor.user().profile.teams.length; i++) {

      teams.push(Teams.findOne({_id: Meteor.user().profile.teams[i]}));

    }

    return teams

  }

});
