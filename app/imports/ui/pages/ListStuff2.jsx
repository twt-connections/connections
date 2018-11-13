import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Button, Image, Loader } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuff2 extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">User Profiles</Header>
          <Card.Group centered>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>UH Manoa, BS Computer Science 2019</Card.Meta>
                <Card.Description>
                  Hello, I'm Steve, a recent graduate of UH Manoa. I am currently looking for a job in software engineering. <br/>
                  <b>Location</b>: Honolulu, HI <br/>
                  <b>Skillset</b>: Java, C++ <br/>
                  <b>Interests</b>: Software Engineering, Web Design <br/>
                  <b>Experience</b>: Entry-level
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Request Info
                  </Button>
                  <Button basic color='blue'>
                    Contact
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>UH Manoa, BS Computer Science 2020</Card.Meta>
                <Card.Description>
                  Hey! My name is Molly Thomas, I'm currently a student at UH Manoa in Hawaii, majoring in Computer Science. I'm seeking an internship for next summer. <br/>
                  <b>Location</b>: Honolulu, HI <br/>
                  <b>Skillset</b>: C, Javascript <br/>
                  <b>Interests</b>: Artificial Intelligence, Databases <br/>
                  <b>Experience</b>: Entry-level
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Request Info
                  </Button>
                  <Button basic color='blue'>
                    Contact
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Card.Header>Elliot Baker</Card.Header>
                <Card.Meta>UH Manoa, MS Mathematics 1996</Card.Meta>
                <Card.Description>
                  GREETINGS, I AM ELLIOT BAKER. DO TO UNSAVORY CIRCUMSTANCES, I AM CURRENTLY SEEKING A CHANGE OF EMPLOYMENT. <br/>
                  <b>Location</b>: HONOLULU, HI, 96782 <br/>
                  <b>Skillset</b>: ALGOL-68, COBOL, LINUX, AND ALL OBJECT-ORIENTED LANGUAGES. <br/>
                  <b>Interests</b>: ASTROPHYSICS <br/>
                  <b>Experience</b>: 20+ YEARS
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Request Info
                  </Button>
                  <Button basic color='blue'>
                    Contact
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuff2.propTypes = {
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
})(ListStuff2);
