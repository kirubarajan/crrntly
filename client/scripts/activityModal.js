Template.activityModal.helpers({
  'activity': function() {

    let activity_id = Session.get('activity');

    var activity = Activities.findOne(activity_id);

    activity.authorName = Meteor.call('getName', activity.author);

    console.log(Meteor.call('getName', activity.author));

    return activity

  }
})

Template.activityModal.events({

  'click #complete': function() {

     console.log('complete');

    let activity = Session.get('activity');
    Modal.hide('activityModal');

    Activities.remove(activity);

  },

  'click #delete': function() {

    console.log('complete');

    let activity = Session.get('activity');

    Modal.hide('activityModal');

    Activities.remove(activity);

  }


})
