import React from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StudentItem extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.studentItem.image} />
            <Card.Header>
              {this.props.studentItem.firstName} {this.props.studentItem.lastName}
            </Card.Header>
            <Card.Meta>
              {this.props.studentItem.school}<br/>
              {this.props.studentItem.degree}
            </Card.Meta>
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
StudentItem.propTypes = {
  studentItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StudentItem);
