import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { CompanyProfiles } from '/imports/api/profiles/CompanyProfile';
import CompanyItem from '/imports/ui/components/CompanyItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the CompanyProfiles documents. Use <CompanyItem> to render each row. */
class BrowseListings extends React.Component {

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
            {this.props.companyProfiles.map((companyProfile, index) => <CompanyItem key={index} companyItem={companyProfile} />)}
          </Card.Group>
          <br/>
        </Container>
    );
  }
}

/** Require an array of CompanyProfiles documents in the props. */
BrowseListings.propTypes = {
  companyProfiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to CompanyProfiles documents.
  const subscription = Meteor.subscribe('CompanyProfiles');
  return {
    companyProfiles: CompanyProfiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(BrowseListings);
