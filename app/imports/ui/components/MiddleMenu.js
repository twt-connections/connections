import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middle">
          <Grid container centered>
            <Menu.Item>Profiles</Menu.Item>
            <Menu.Item>Listings</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
