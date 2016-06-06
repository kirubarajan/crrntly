Template.teams.helpers({

  'team': function() {

    var teams = [];

    for (var i = 0; i < Meteor.user().profile.teams.length; i++) {

      teams.push(Teams.findOne({_id: Meteor.user().profile.teams[i]}));

    }

    return teams

  },

  'invitations': function() {

    invitations = [];

    for (var i = 0; i < Invitations.find({user: Meteor.userId()}).fetch().length; i++) {

      invitations.push(Teams.findOne({_id: Invitations.find({user: Meteor.userId()}).fetch()[i].team}));

    }

    return invitations

  }

})

Template.teams.events({

  'click .accept': function() {

    event.preventDefault();

    let invitation = Invitations.findOne({user: Meteor.userId(), team: this._id});

    let team = Teams.findOne({_id: invitation.team});

    team.mates.push(Meteor.userId());

    Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.teams": invitation.team}});

    Invitations.remove({_id: invitation._id});

  },

  'click .decline': function() {

    event.preventDefault();

    let invitation = Invitations.findOne({user: Meteor.userId(), team: this._id});

    Invitations.remove({_id: invitation._id});

  }

})
