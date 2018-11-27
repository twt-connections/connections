import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class Connections extends React.Component {
  render() {
    return (
        <div className='landing-background-image'>

          <div className='landing-grid'>
            <Grid container centered stackable columns={3}>
              <Grid.Column className='landing-column-left' textAlign='center'>
                <Icon name='student' size='huge' color='green'></Icon>
              </Grid.Column>
              <Grid.Column className='landing-column-mid' textAlign='center'>
                <Icon name='handshake' size='massive' color='green'></Icon>
              </Grid.Column>
              <Grid.Column className='landing-column-right' textAlign='center'>
                <Icon name='address card' size='huge' color='green'></Icon>
              </Grid.Column>
            </Grid>
          </div>

          <div className='landing-text'>
            <h1>
              RecruitingGrounds connects employees with future employers, allowing for individuals and organizations to
              seek one another out based on qualifications and needs in a user-friendly and convenient fashion.
            </h1>
          </div>
        </div>
    );
  }
}
