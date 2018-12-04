import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {

  render() {
    return (
        <Card.Group centered>
          <Card centered>
            <Card.Content>
              <Image floated='right' size='mini' src={this.props.profile.image} />
              <Card.Header>
                {this.props.profile.firstName} {this.props.profile.lastName}
              </Card.Header>
              <Card.Description>
                {this.props.profile.degree}
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Description>
                {this.props.profile.school}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/editStudentProfile/${this.props.profile._id}`}>Click to Edit</Link>
            </Card.Content>
          </Card>
        </Card.Group>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
