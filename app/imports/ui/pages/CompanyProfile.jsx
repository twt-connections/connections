import React from 'react';
import { Profiles, ProfileSchema } from '/imports/api/profiles/profile';
import { Header, Image, Container, Button, Segment, Grid } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class CompanyProfile extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
          <Container>
            <Header
                as='h1'
                content='Company Name'
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
                content='Company Slogan'
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
                      All about our company
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      We are good company. We have puppies :)
                    </p>
                    <Header as='h2' style={{ fontSize: '2em' }}>
                      What we are looking for
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      Something something we need to hire some people so just send us your resume and we'll hire you.
                    </p>
                  </Grid.Column>

                  <Grid.Column floated='right' width={6}>
                    <Image bordered rounded size='large' src='https://react.semantic-ui.com/images/wireframe/white-image.png'/>
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
                      Starting positions available
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
                      What else do we offer
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
                      AND PUPPIES
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
                      Extra links
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
                      Contact emails
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
            </Segment>
          </Container>
    );
  }
}

export default CompanyProfile;
