Template.edit.events({

  'submit #update': function() {
    event.preventDefault();

    let title = event.target.title.value;
    let message = event.target.message.value;

    Teams.update(this._id, {$set: {title: title, message: message}});

    Router.go('/teams');

  },

  'submit #invite': function() {

    event.preventDefault();

    let email = event.target.email.value;

    if (this.mates.indexOf(email) == -1) {

      var user = Profiles.find({email: email}).fetch();

      console.log(user);

      if (Teams.findOne({_id: Router.current().params._id}).mates.indexOf(user.user) == -1) {

        Invitations.insert({user: user.user, team: Router.current().params._id});

      }

    }

    Router.go('/teams');

  },

  'click #delete': function() {

    Modal.show('deleteModal');

  }

})
