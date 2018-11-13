import React from 'react';
import { Contacts, ContactSchema } from '/imports/api/contact/contact';
import { Card, Container, Feed, Header, Image, Button, Grid, Segment, Menu } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

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
    const { firstName, lastName, address, image, description } = data;
    const owner = Meteor.user().username;
    Contacts.insert({ firstName, lastName, address, image, description, owner }, this.insertCallback);
  }

  state = { activeItem: 'profile' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const { activeItem } = this.state;

    return (
        /**
        <div>
          <Menu tabular secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>

          <Segment>
            <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Segment>
        </div>
         */



        <Container>
            <Header as="h2" textAlign="center" inverted>Student Profile Page</Header>
          <Card.Group itemsPerRow={4} centered>
            <Card>
              <Card.Content>
                <Image centered size='medium' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' circular/>
                <Card.Header centered>
                  Full Name
                </Card.Header>
                <Card.Meta>
                  @UserName (?)
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <h5>Personal Info (?) Maybe</h5>
                <h5>School</h5>
                <h5>Highest Level of Education</h5>
                <h5>Major, etc.</h5>
                <h5>link to portfolio</h5>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header textAlign={'center'}>Interests</Card.Header>
                <Card.Description>
                  <h3>Machine Learning</h3>
                  <h3>Artificial Intelligence</h3>
                  <h3>Video Games</h3>
                  <h3>Neural Networks</h3>
                  <h3>React.js</h3>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Click to Edit
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header textAlign={'center'}>Skills</Card.Header>
                <Card.Description>
                  <h3>Java</h3>
                  <h3>JavaScript</h3>
                  <h3>React.js</h3>
                  <h3>Node.js</h3>
                  <h3>MongoDB</h3>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Click to Edit
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header textAlign={'center'}>Preferred Geographic Location</Card.Header>
                <Card.Description>
                  <h3>Hawaii</h3>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Click to Edit
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>

    );
  }
}

export default StudentProfile;
