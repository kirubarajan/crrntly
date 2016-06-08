Template.activityModal.helpers({

  'activity': function() {

    let activity_id = Session.get('activity');

    var activity = Activities.findOne(activity_id);

    activity.authorName = Profiles.findOne({user: activity.author}).name;

    return activity

  },

  'section': function() {
    return Teams.findOne({_id: Router.current().params._id}).sections
  },

  'isSelected': function() {

    let activity_id = Session.get('activity');

    var activity = Activities.findOne(activity_id);

    if (activity.section == this._id) {
      return "selected"
    }
    else {
      return
    }

  },

  'update': function() {

    let activity_id = Session.get('activity');

    return Updates.find({activity: activity_id});

  },

  'users': function() {

    let activity_id = Session.get('activity');

    var activity = Activities.findOne(activity_id);

    for (var i = 0; i < activity.users.length; i++) {

      

    }

  }

})

Template.activityModal.events({

  'keyup .activityTitleInput': function() {

    event.preventDefault();

    if (event.which == 13 || event.which == 27) {
      event.target.blur();
    }
    else {

      let title = event.target.value;

      if (title != "") {
        Activities.update(Session.get('activity'), {$set: {title: title}});
      }
      else {

      }

    }

  },

  'blur .activityTitleInput': function() {

    event.preventDefault();

    let title = event.target.value;

    if (title != "") {
      Activities.update(Session.get('activity'), {$set: {title: title}});
      event.target.blur();
    }
    else {

    }

  },

  'click #complete': function() {

    console.log('complete');

    let activity = Session.get('activity');
    Modal.hide('activityModal');

  },

  'click #delete': function() {

    console.log('complete');

    let activity = Session.get('activity');

    Modal.hide('activityModal');

    Activities.remove(activity);

  },

  'change select': function(event) {

    let index = $("select").prop('selectedIndex') - 1;

    let section = Teams.findOne({_id: Router.current().params._id}).sections[index]._id;

    Activities.update(Session.get('activity'), {$set: {section: section}});

  },

  'submit #update': function(event) {

    event.preventDefault();

    let update = event.target.update.value;

    event.target.update.value = "";

    Updates.insert({activity: Session.get('activity'), title: update, date: moment().format("MMMM Do YYYY")});

    console.log(update);

  }

})
