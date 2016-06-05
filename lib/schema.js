Schema = {};

Schema.User = new SimpleSchema({

  name: {
    type: String,
    max: 50
  },

  avatar: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },

  bio: {
    type: String,
    optional: true
  },

  teams: {
    type: [String]
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true
  }

});

Meteor.users.attachSchema(Schema.User);
