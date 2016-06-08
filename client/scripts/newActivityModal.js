Template.newActivityModal.helpers({

  'section': function() {
    return Teams.findOne({_id: Router.current().params._id}).sections
  },

  'isSelected': function() {

    if (Session.get('section') == this._id) {
      return "selected"
    }
    else {
      return
    }

  }

})

Template.newActivityModal.events({

  'submit form': function(event) {

    event.preventDefault();

    let activity = event.target.activity.value;
    let section = $("select").val()

    console.log(section);

    Activities.insert({author: Meteor.userId(), team: Router.current().params._id, title: activity, section: Session.get('section'), date: moment().format("MMMM Do YYYY")});

    Modal.hide('newActivityModal');

  }

})
