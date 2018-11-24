import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middle">
          <Grid container centered>
            <Menu.Item as={NavLink} activeClassName="active" exact to="listStuff" key='listStuff'>Profiles</Menu.Item>
            <Menu.Item>Listings</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}