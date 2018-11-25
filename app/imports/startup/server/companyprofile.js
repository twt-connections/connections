import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { CompanyProfiles } from '../../api/profiles/CompanyProfile.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  CompanyProfiles.insert(data);
}

/** Initialize the collection if empty. */
if (CompanyProfiles.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultCompanyProfiles.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('CompanyProfiles', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).name;
    return CompanyProfiles.find({ owner: name });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('CompanyProfilesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return CompanyProfiles.find();
  }
  return this.ready();
});