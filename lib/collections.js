Teams = new Mongo.Collection('teams');
Invitations = new Mongo.Collection('invitations');
Activities = new Mongo.Collection('activities');
Profiles = new Mongo.Collection('profiles');
Updates = new Mongo.Collection('updates');

ProfilesIndex = new EasySearch.Index({
  collection: Profiles,
  fields: ['name', 'email'],
  engine: new EasySearch.Minimongo()
});
