import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { StudentProfiles } from '/imports/api/profiles/StudentProfile.js';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import StudentItem from '/imports/ui/components/StudentItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class BrowseProfiles extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Browse Listings</Header>
          <Card.Group>
            {this.props.studentProfiles.map((studentProfile, index) => <StudentItem key={index} student={studentProfile}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
BrowseProfiles.propTypes = {
  studentProfiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StudentProfiles');
  return {
    studentProfiles: StudentProfiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(BrowseProfiles);
