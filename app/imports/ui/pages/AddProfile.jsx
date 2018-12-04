import React from 'react';
import { StudentProfiles, StudentProfileSchema } from '/imports/api/profiles/profile';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddProfile extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { image, firstName, lastName, degree, school } = data;
    const owner = Meteor.user().username;
    StudentProfiles.insert({ image, firstName, lastName, degree, school, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Your New Profile</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={StudentProfileSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='image' placeholder='Enter the url to your image'/>
                <TextField name='firstName' placeholder='Enter your first name'/>
                <TextField name='lastName' placeholder='Enter your last name'/>
                <TextField name='degree' placeholder='Enter your latest degree accomplished'/>
                <TextField name='school' placeholder='Enter the school youre attending'/>
                <TextField name='owner' placeholder='Enter your email'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddProfile;
