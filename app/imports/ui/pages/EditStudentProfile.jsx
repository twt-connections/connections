import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { StudentProfiles, StudentProfileSchema } from '/imports/api/stuff/StudentProfile';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders the Page for editing a single document. */
class EditStudentProfile extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, image, userName, personalInfo, school, fieldOfStudy, interests, skills, prefLocation, educationLevel, _id } = data;
    StudentProfiles.update(_id, { $set: { firstName, lastName, image, userName, personalInfo, school, fieldOfStudy, interests, skills, prefLocation, educationLevel } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Edit Student Profile</Header>
            <AutoForm schema={StudentProfileSchema} onSubmit={this.submit} model={this.props.doc}>
              <Segment>
                <TextField name='firstName'/>
                <TextField name='lastName'/>
                <TextField name='email'/>
                <TextField name='image'/>
                <TextField name='userName'/>
                <LongTextField name='personalInfo'/>
                <TextField name='school'/>
                <TextField name='fieldOfStudy'/>
                <TextField name='interests'/>
                <TextField name='skills'/>
                <TextField name='prefLocation'/>
                <SelectField name='educationLevel'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditStudentProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StudentProfiles');
  return {
    doc: StudentProfiles.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditStudentProfile);
