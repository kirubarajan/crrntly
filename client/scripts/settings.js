Template.settings.helpers({

  'team': function() {

    var teams = [];

    for (var i = 0; i < Meteor.user().profile.teams.length; i++) {

      teams.push(Teams.findOne({_id: Meteor.user().profile.teams[i]}));

    }

    return teams

  },

  'user': function() {

    var user = Meteor.userId();

    return Profiles.findOne({user: user})

  }

});

Template.settings.events({

  'submit form': function() {

    event.preventDefault();
    let name = event.target.name.value;

    if (name != "") {

      Meteor.users.update(Meteor.userId(), {$set: {"profile.name": name}});

    }


  }

})
