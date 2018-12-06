import React from 'react';
import { Image, Container, Header, Button, Segment, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {

  render() {
    return (
        <Container>
          <Header
              as='h2'
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginTop: '3em',
                textAlign: 'center'
              }}>
            {this.props.profile.firstName} {this.props.profile.lastName}
          </Header>

          <Header
              as='h2'
              content={this.props.profile.school}
              style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
                textAlign: 'center'
              }}
          />

          <Segment style={{ padding: '8em 0em'}} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h2' style={{ fontSize: '2em' }}>
                    A Few Things About Me
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    A participant in the national hackathon
                  </p>
                  <p style={{ fontSize: '1.33em' }}>
                    A member of Cal Berkeley ACM
                  </p>
                  <p style={{ fontSize: '1.33em' }}>
                    {this.props.profile.degree}
                  </p>
                </Grid.Column>

                <Grid.Column floated='right' width={6}>
                  <Image bordered rounded size='large' src={this.props.profile.image}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='large'>
                    <a href="www.github.com">Link to Resume</a>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    Strengths
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    I know Java (3 Billion Devices)
                  </p>
                  <p style={{ fontSize: '1.33em' }}>
                    I can work well in a team
                  </p>
                  <p style={{ fontSize: '1.33em' }}>
                    I can do everything you want me to
                  </p>
                </Grid.Column>

                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    Weaknesses
                  </Header>
                  <p style={{ fontSize: '1.25em' }}>
                    I work too much
                  </p>
                  <p style={{ fontSize: '1.25em' }}>
                    I am too critical of myself
                  </p>
                  <p style={{ fontSize: '1.25em' }}>

                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '8em 0em'}} vertical>
            <Grid container stackable verticalAlign='middle' columns='equal'>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    Github Projects
                  </Header>
                  <p style={{ fontSize: '1em' }}>
                    <a href="www.sanger.dk">click here for my github</a>
                  </p>
                </Grid.Column>

                <Grid.Column style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    Contact Email
                  </Header>
                  <p style={{ fontSize: '1em' }}>
                    <a href="www.google.com">john@foo.com</a>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Button floated='right'>
              <Link to={`/editStudentProfile/${this.props.profile._id}`}>Click to Edit</Link>
            </Button>
          </Segment>
        </Container>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
