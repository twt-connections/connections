import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const StudentProfiles = new Mongo.Collection('StudentProfiles');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ProfileSchema = new SimpleSchema({
image: String,
firstName: String,
lastName: String,
degree: String,
school: String,
owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
StudentProfiles.attachSchema(ProfileSchema);

/** Make the collection and schema available to other code. */
export { StudentProfiles, ProfileSchema };
