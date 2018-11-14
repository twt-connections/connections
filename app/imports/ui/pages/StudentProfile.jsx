import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import { Header, Card, Image, Container, Button } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Grid } from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

/** Renders the Page for adding a document. */
class StudentProfile extends React.Component {

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
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center">Student Profile Page</Header>
          <Card.Group itemsPerRow={4} centered>
            <Card>
              <Card.Content>
                <Image centered size='medium' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' circular/>
                <Card.Header centered>
                  Full Name
                </Card.Header>
                <Card.Meta>
                  @UserName
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Card.Description>
                  <h5>Personal Info</h5>
                  <h5>School</h5>
                  <h5>Highest Level of Education</h5>
                  <h5>Major, etc.</h5>
                  <h5>link to portfolio</h5>
                </Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header size='medium' textAlign={'center'}>Interests</Card.Header>
                <Card.Description>
                  <b>Machine Learning</b><br/>
                  <b>Artificial Intelligence</b><br/>
                  <b>Video Games</b><br/>
                  <b>Neural Networks</b><br/>
                  <b>React.js</b><br/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button size='tiny' >Click to Edit</Button>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header size='medium' textAlign={'center'}>Skills</Card.Header>
                <Card.Description>
                  <b>Java</b><br/>
                  <b>JavaScript</b><br/>
                  <b>React.js</b><br/>
                  <b>Node.js</b><br/>
                  <b>MongoDB</b><br/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button size='tiny' >Click to Edit</Button>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header size='medium' textAlign={'center'}>Preferred Geographic Location</Card.Header>
                <Card.Description>
                  <b>Hawaii</b><br/>
                  <b>Silicon Valley</b><br/>
                  <b>Seattle</b><br/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button size='tiny' >Click to Edit</Button>
              </Card.Content>
            </Card>
          </Card.Group>
          <br/>
        </Container>
    );
  }
}

export default StudentProfile;
