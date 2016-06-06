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
  }

})
