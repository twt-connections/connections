import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, List, Image } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import StudentItem from '/imports/ui/components/StudentItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuff extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Student Profiles</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Degree</Table.HeaderCell>
                <Table.HeaderCell>School</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.stuffs.map((student) => <StudentItem key={student._id} stuff={student}/>)}
            </Table.Body>
          </Table>
          <List divided verticalAlign='middle' relaxed size={'massive'}>
            {this.props.stuffs.map((student) => <StudentItem key={student._id} stuff={student}/>)}
          </List>
          <List divided verticalAlign='middle' relaxed size={'massive'}>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
              <List.Content>
                <List.Header as='a'>Steve Sanders</List.Header>
                <List.Description>BS Computer Science</List.Description>
                <List.Description>UH Manoa</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'/>
              <List.Content>
                <List.Header as='a'>Molly Thomas</List.Header>
                <List.Description>BA Computer Science</List.Description>
                <List.Description>UH Manoa</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg'/>
              <List.Content>
                <List.Header as='a'>Elliot Baker</List.Header>
                <List.Description>BS Chemistry</List.Description>
                <List.Description>UH Manoa</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'/>
              <List.Content>
                <List.Header as='a'>Lindsay Stevenson</List.Header>
                <List.Description>BA Computer Science</List.Description>
                <List.Description>UH Manoa</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg'/>
              <List.Content>
                <List.Header as='a'>Veronika Ossi</List.Header>
                <List.Description>BS Computer Science</List.Description>
                <List.Description>UH Manoa</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
              <List.Content>
                <List.Header as='a'>Matthew Gray</List.Header>
                <List.Description>BA Computer Science</List.Description>
                <List.Description>UH Manoa</List.Description>
              </List.Content>
            </List.Item>
          </List>

        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuff.propTypes = {
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
})(ListStuff);
