Template.team.helpers({

  'isAdmin': function() {

    if (this.admins.indexOf(Meteor.userId()) > -1) {
      return true
    }
    else {
      return false
    }

  },

  'section': function() {

    var sections = [];

    for (var i = 0; i < this.sections.length; i++) {

      sections.push(this.sections[i]);

      sections[i].activities = Activities.find({team: this._id, section: sections[i]._id}).fetch();

    }

    console.log(sections);

    return sections

  },

  'activity': function() {
    return Activities.find({team: this._id})
  }

})

Template.team.events({

  'submit #section': function(event) {

    event.preventDefault();

    let section = event.target.section.value;

    event.target.section.value = "";

    if (section != "") {
      Teams.update({_id: this._id}, {$push: {sections: {title: section, _id: Random.id()}}});
    }

  },

  'click .new-activity': function(event) {

    Session.set('section', this._id);
    Modal.show('newActivityModal');

  }

})
