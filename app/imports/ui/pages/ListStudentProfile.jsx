import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profiles/profile';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Profile from '/imports/ui/components/Profile';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStudentProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Student Profile Page</Header>
          <Card.Group>
            {this.props.profiles.map((profile, index) => <Profile key={index} profile={profile} />)}
          </Card.Group>
          <br/>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStudentProfile.propTypes = {
  studentprofiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StudentProfiles');
  return {
    studentprofiles: Profiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStudentProfile);
