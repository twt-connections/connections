import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the Browse Listings page. See pages/BrowseListings.jsx. */
class CompanyItem extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.companyItem.image} />
            <Card.Header>
              {this.props.companyItem.name}
            </Card.Header>
            <Card.Meta>
              {this.props.companyItem.location}
            </Card.Meta>
            <Card.Description>
              {this.props.companyItem.description}
            </Card.Description>
            <Card.Content extra>
              <div className='ui two small buttons'>
                <Button basic color='green'>
                  Add to network
                </Button>
                <Button basic color='blue'>
                  Message
                </Button>
              </div>
            </Card.Content>
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
