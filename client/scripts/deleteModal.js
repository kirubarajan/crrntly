Template.deleteModal.events({

  'click #delete': function() {

    let team = Router.current().params._id;
    
    Modal.hide('deleteModal');

    Router.go('teams');

    Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.teams": team}});

    Meteor.call('clearActivities', team);

    Teams.remove(team);

  }

})
