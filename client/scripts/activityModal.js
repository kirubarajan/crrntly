Template.activityModal.helpers({
  'activity': function() {

    let activity = Session.get('activity');

    return Activities.findOne(activity);
  }
})
