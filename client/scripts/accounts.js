Template.login.events({

  'submit #login': function() {

    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    Meteor.loginWithPassword(email, password);

    Router.go('teams');

  },

  'submit #register': function() {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    let confirm = event.target.confirm.value;
    let name = event.target.name.value;

    if (confirm == password) {

      Accounts.createUser({
        email: email,
        password: password,
        name: name,
        bio: "eager to work!",
        teams: [],
        avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      }, function() {

      });

      Router.go('teams');

    }

  }

})
