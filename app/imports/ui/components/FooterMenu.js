import React from 'react';
import { Grid, List, Label, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns={3}>
            <Grid.Column>
              NAVIGATION
              <hr/>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              MAIN MENU
              <hr/>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              CONNECT
              <hr/>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <Input placeholder='Enter email address'></Input>
                <Label color={'black'}>Join</Label>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
