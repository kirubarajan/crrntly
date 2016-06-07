Template.newteam.events({

  'submit form': function() {

    event.preventDefault();

    let title = event.target.title.value;
    let message = event.target.message.value;
    let date = moment().format("MMMM Do YYYY");

    let team = Teams.insert({title: title, message: message, date: date, sections: [], mates: [Meteor.userId()], admins: [Meteor.userId()]});

    Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.teams": team}});

    Router.go('/teams/' + team);

  }

})
