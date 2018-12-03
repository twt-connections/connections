import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { CompanyProfiles } from '/imports/api/profiles/CompanyProfile';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import CompanyProfilez from '/imports/ui/components/CompanyProfile';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CompanyProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div>
          <Container>
            <Card.Group>
              {this.props.companyprofiles.map((companyprofile) => <CompanyProfilez key={companyprofile._id} companyItem={companyprofile} />)}
            </Card.Group>
            <br/>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
CompanyProfile.propTypes = {
  companyprofiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to CompanyProfile documents.
  const subscription = Meteor.subscribe('CompanyProfiles');
  return {
    companyprofiles: CompanyProfiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CompanyProfile);