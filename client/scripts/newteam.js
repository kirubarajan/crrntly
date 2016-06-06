Template.newteam.events({

  'submit form': function() {

    event.preventDefault();

    let name = event.target.name.value;
    let message = event.target.message.value;
    let date = moment().format("MMMM Do YYYY");

    let team = Teams.insert({name: name, message: message, date: date, mates: [Meteor.userId()]});

    Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.teams": team}});

    Router.go('/teams/' + team);

  }

})
