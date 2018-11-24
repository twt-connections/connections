import React from 'react';
import { Image, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StudentItem extends React.Component {
  render() {
    return (
          <List.Item>
            <Image avatar src={this.props.studentitem.image}/>
            <List.Content>
              <List.Header as='a'>{this.props.studentitem.firstName} {this.props.studentitem.lastName}</List.Header>
              <List.Description>{this.props.studentitem.degree}</List.Description>
              <List.Description>{this.props.studentitem.school}</List.Description>
            </List.Content>
          </List.Item>
    );
  }
}

/** Require a document to be passed to this component. */
StudentItem.propTypes = {
  studentitem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StudentItem);
