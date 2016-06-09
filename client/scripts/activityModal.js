Template.activityModal.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      Session.set('query', '');
    }
}

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

    var mates = Activities.findOne(activity_id).mates;

    var users = [];

    for (var i = 0; i < mates.length; i++) {

      users.push(Profiles.findOne({user: mates[i]}));

    }

    return users

  },

  'result': function() {

    let query = Session.get('query');

    var users = [];

    if (query != "") {

      let mates = Teams.findOne({_id: Router.current().params._id}).mates;

      let results = ProfilesIndex.search(query).fetch();

      for (var i = 0; i < results.length; i++) {

        if (mates.indexOf(results[i].user) > -1) {

          users.push(results[i]);

        }

      }

    }

    return users

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

    let activity = Session.get('activity');
    Modal.hide('activityModal');

  },

  'click #delete': function() {

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

  },

  'keyup #query': function() {

    let query = event.target.value;

    Session.set('query', query);

  },

  'click #result': function() {

    let activity = Activities.findOne(Session.get('activity'));

    if (activity.mates.indexOf(this.user) == -1) {

      Activities.update(Session.get('activity'), {$push: {mates: this.user}});

    }

    console.log(activity);

    console.log(this);

  }

})
