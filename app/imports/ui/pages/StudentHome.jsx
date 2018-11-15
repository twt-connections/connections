import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Button, Image, Loader } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CompanyHome extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="landing-background-image">
          <Container>
            <Header as="h2" textAlign="center">Your Connections</Header>
            <Card.Group centered>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
                  <Card.Header>Melon Tusk</Card.Header>
                  <Card.Meta>Apple Motors</Card.Meta>
                  <Card.Description>
                    Seeking recent graduates in computer science looking for an entry level position. Training period is provided. <br/>
                    <b>Location</b>: Honolulu, HI <br/>
                    <b>Required Skills</b>: Java, C++ <br/>
                    <b>Desirable Skills</b>: Software Engineering, Web Design <br/>
                    <b>Experience</b>: Entry-level
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui three buttons'>
                    <Button basic color='green'>
                      Request Info
                    </Button>
                    <Button basic color='blue'>
                      Contact
                    </Button>
                    <Button basic color='red'>
                      Remove
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png'/>
                  <Card.Header>Gelinda Mates</Card.Header>
                  <Card.Meta>Hilltop Systems</Card.Meta>
                  <Card.Description>
                 Seeking full time, full stack developer with at least 20 years experience. <br/>
                    <b>Location</b>: Spokane, WA <br/>
                    <b>Required Skills</b>: Java, C++, Python, Wordpress <br/>
                    <b>Desirable Skills</b>: Everything <br/>
                    <b>Experience</b>: 20+ Years
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui three buttons'>
                    <Button basic color='green'>
                      Request Info
                    </Button>
                    <Button basic color='blue'>
                      Contact
                    </Button>
                    <Button basic color='red'>
                      Remove
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini'
                         src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'/>
                  <Card.Header>Sedward Eoden</Card.Header>
                  <Card.Meta>Rolling Inc.</Card.Meta>
                  <Card.Description>
                    Seeking junior level developer. <br/>
                    <b>Location</b>: Palo Alto, CA <br/>
                    <b>Required Skills</b>: Alice3 <br/>
                    <b>Desirable Skills</b>: Java <br/>
                    <b>Experience</b>: Summer Internship
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui three buttons'>
                    <Button basic color='green'>
                      Request Info
                    </Button>
                    <Button basic color='blue'>
                      Contact
                    </Button>
                    <Button basic color='red'>
                      Remove
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
CompanyHome.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CompanyHome);
