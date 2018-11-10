import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid centered>
            <Grid.Row><Header inverted as='h5'>© TWT-Connections</Header></Grid.Row>
          </Grid>
        </div>
    );
  }
}
