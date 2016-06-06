Template.team.helpers({

  'isAdmin': function() {

    if (this.admins.indexOf(Meteor.userId()) > -1) {
      return true
    }
    else {
      return false
    }

  }

})
