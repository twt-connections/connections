import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.profile.image} />
            <Card.Header>
              {this.props.profile.firstName} {this.props.profile.lastName}
            </Card.Header>
            <Card.Description>
              {this.props.profile.universityInfo}
            </Card.Description>
            <Card.Description>
              {this.props.profile.description}
            </Card.Description>
            <Card.Description>
              {this.props.profile.location}
            </Card.Description>
            <Card.Description>
              {this.props.profile.skillset}
            </Card.Description>
            <Card.Description>
              {this.props.profile.interests}
            </Card.Description>
            <Card.Description>
              {this.props.profile.experience}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.profile._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
