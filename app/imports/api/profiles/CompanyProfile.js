import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const CompanyProfiles = new Mongo.Collection('CompanyProfiles');

/** Create a schema to constrain the structure of documents associated with this collection. */
const CompanyProfileSchema = new SimpleSchema({
  name: String,
  image: String,
  slogan: String,
  location: String,
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
CompanyProfiles.attachSchema(CompanyProfileSchema);

/** Make the collection and schema available to other code. */
export { CompanyProfiles, CompanyProfileSchema };