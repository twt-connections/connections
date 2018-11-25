import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the Browse Listings page. See pages/BrowseListings.jsx. */
class CompanyItem extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.companyItem.image} />
            <Card.Header>
              {this.props.companyItem.name}
              </Card.Header>
            </Card.Header>
            <Card.Meta>
              {this.props.companyItem.location}
            </Card.Meta>
            <Card.Description>
              {this.props.companyItem.description}
              <br />
              {this.props.companyItem.owner}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
CompanyItem.propTypes = {
  companyItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CompanyItem);
