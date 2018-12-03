import React from 'react';
import { Card, Image, Container, Header, Button, Segment, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single card in the Browse Listings page. See pages/BrowseListings.jsx. */
class CompanyProfile extends React.Component {

  render() {
    return (
        <Container>
          <Header
              as='h1'
              content={this.props.companyItem.name}
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
                textAlign: 'center'
              }}
          />
          <Header
              as='h2'
              content={this.props.companyItem.description}
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
                    All about doc (list)
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    We are good company.
                  </p>
                  <Header as='h2' style={{ fontSize: '2em' }}>
                    What we are looking for
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Something something we need to hire some people so just send us your resume and we'll hire you.
                  </p>
                </Grid.Column>

                <Grid.Column floated='right' width={6}>
                  <Image bordered rounded size='large' src={this.props.companyItem.image}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='large'>Go to site</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>


          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    Available positions doc (use a list)
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Front-End Developers
                    <Button size='small' floated='right'>Click for specifications</Button>
                  </p>
                  <p style={{ fontSize: '1.33em' }}>
                    Back-End Developers
                    <Button size='small' floated='right'>Click for Specifications</Button>
                  </p>
                  <p style={{ fontSize: '1.33em' }}>
                    Just need more devs honestly
                    <Button size='small' floated='right'>Click for specifications</Button>
                  </p>
                </Grid.Column>

                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    Positives to company doc (use a list)
                  </Header>
                  <p style={{ fontSize: '1.25em' }}>
                    Internships
                  </p>
                  <p style={{ fontSize: '1.25em' }}>
                    Jobs (obviously)
                  </p>
                  <p style={{ fontSize: '1.25em' }}>
                    Free food
                  </p>
                  <p style={{ fontSize: '1.25em' }}>
                    things
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
                    Links doc (use list)
                  </Header>
                  <p style={{ fontSize: '1em' }}>
                    <a src="www.sanger.dk">click here for our website</a>
                  </p>
                  <p style={{ fontSize: '1em' }}>
                    <a src="www.sanger.dk">click here for money</a>
                  </p>
                  <p style={{ fontSize: '1em' }}>
                    <a src="www.sanger.dk">click here if you want good grades</a>
                  </p>
                </Grid.Column>

                <Grid.Column style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
                  <Header as='h3' style={{ fontSize: '2m' }}>
                    contact emails doc (use list)
                  </Header>
                  <p style={{ fontSize: '1em' }}>
                    <a src="www.sanger.dk">ceo@companyname.com</a>
                  </p>
                  <p style={{ fontSize: '1em' }}>
                    <a src="www.sanger.dk">regionalmanager@companyname.com</a>
                  </p>
                  <p style={{ fontSize: '1em' }}>
                    <a src="www.sanger.dk">assistanttotheregionalmanager@companyname.com</a>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Button floated='right'>
              <Link to={`/editCompanyProfile/${this.props.companyItem._id}`}>Click to Edit</Link>
            </Button>
          </Segment>
        </Container>
    );
  }
}

/** Require a document to be passed to this component. */
CompanyProfile.propTypes = {
  companyItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CompanyProfile);
