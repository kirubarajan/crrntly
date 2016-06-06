import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.name = options.name;
   // Returns the user object
   user.profile.bio = options.bio;

   user.profile.teams = options.teams;

   user.profile.avatar = options.avatar;

   return user;

});
