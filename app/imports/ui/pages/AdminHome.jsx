import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Table, Loader, Label, Menu, Icon } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
// import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminHome extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Admin Home</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>New Users</Table.HeaderCell>
                <Table.HeaderCell>New Organizations</Table.HeaderCell>
                <Table.HeaderCell>New Connections</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Steve Sanders</Table.Cell>
                <Table.Cell>Strawberry</Table.Cell>
                <Table.Cell>Skynet connected with Elliot Baker</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Molly Thomas</Table.Cell>
                <Table.Cell>Skynet</Table.Cell>
                <Table.Cell>Strawberry connected with Steve Sanders</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Elliot Baker</Table.Cell>
                <Table.Cell>ArmsTech</Table.Cell>
                <Table.Cell>Molly Thomas connected with ArmsTech</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
AdminHome.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AdminHome);
