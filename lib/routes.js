Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/how', {
  name: 'how',
  template: 'how'
});

Router.route('/teams', {
  name: 'teams',
  template: 'teams'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/profile', {
  name: 'profile',
  template: 'profile'
});

Router.route('/team/new', {
  name: 'newteam',
  template: 'newteam'
});

Router.route('/teams/:_id', {
  name: 'team',
  template: 'team',
  data: function() {
    var currentUser = Meteor.userId();
    var team = this.params._id;
    if (currentUser && Teams.findOne({_id: team}).mates.indexOf(currentUser) > -1) {
      var theTeam = Teams.findOne({_id: team});
      return theTeam;
    }
    else {
      this.render('404');
    }
  }
});

Router.route('/teams/:_id/edit', {
  name: 'edit',
  template: 'edit',
  data: function() {
    var currentUser = Meteor.userId();
    var team = this.params._id;
    if (currentUser && Teams.findOne({_id: team}).admins.indexOf(currentUser) > -1) {
      var theTeam = Teams.findOne({_id: team});
      return theTeam;
    }
    else {
      this.render('404');
    }
  }
});
