import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the Browse Listings page. See pages/BrowseListings.jsx. */
class CompanyItem extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.companyprofile.image} />
            <Card.Header>
              {this.props.companyprofile.name}
            </Card.Header>
            <Card.Meta>
              {this.props.companyprofile.location}
            </Card.Meta>
            <Card.Description>
              {this.props.companyprofile.slogan}
            </Card.Description>
            <Card.Description>
              {this.props.companyprofile.description}
            </Card.Description>
            <Card.Content extra>
              <Link to={`/editCompanyProfile/${this.props.companyprofile._id}`}>Click to Edit</Link>
            </Card.Content>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
CompanyItem.propTypes = {
  companyprofile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CompanyItem);
