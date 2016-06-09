Meteor.methods({

  inviteUser: function(team, email) {

    var user = Profiles.findOne({email: email});

    console.log(email);

    if (Teams.findOne({_id: team}).mates.indexOf(user.user) == -1) {

      Invitations.insert({user: user.user, team: team});

    }

  },

  clearActivities: function(team) {

    Activities.remove({team: team});

  }

});
