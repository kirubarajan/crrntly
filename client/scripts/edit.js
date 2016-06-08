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

    let id = event.target.id.value;

    if (this.mates.indexOf(id) == -1) {
      Invitations.insert({user: id, team: this._id});
    }

    Router.go('/teams');

  },

  'click #delete': function() {

    Modal.show('deleteModal');

  }

})
