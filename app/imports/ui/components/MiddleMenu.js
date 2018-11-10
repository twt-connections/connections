import React from 'react';
import { Menu, Dropdown, Grid } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middle">
          <Grid container centered>
            <Dropdown item text="MEN" icon="dropdown icon">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN" icon="dropdown icon">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>KIDS</Menu.Item>
            <Dropdown item text="BRANDS" icon="dropdown icon">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>SEARCH</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
