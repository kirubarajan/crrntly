Meteor.methods({

  inviteUser: function(team, email) {

    var user = Meteor.users.findOne({"emails.address": email});

    if (Teams.findOne({_id: team}).mates.indexOf(user._id) == -1) {

      Invitations.insert({user: user._id, team: team});
      
    }

  },

  clearActivities: function(team) {

    Activities.remove({team: team});

  }

});
