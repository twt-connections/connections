import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { StudentProfiles } from '../../api/profiles/profile.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  StudentProfiles.insert(data);
}

/** Initialize the collection if empty. */
if (StudentProfiles.find().count() === 0) {
  if (Meteor.settings.defaultStudentProfiles) {
    console.log('Creating default student profiles.');
    Meteor.settings.defaultStudentProfiles.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('StudentProfiles', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return StudentProfiles.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StudentProfilesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return StudentProfiles.find();
  }
  return this.ready();
});
