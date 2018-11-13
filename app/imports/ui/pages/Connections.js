import React from 'react';
import Logo from '../components/Logo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';

export default class Connections extends React.Component {

  render() {
    return (
        <div>
          <Logo/>
          <MiddleMenu/>
          <FullWidthImage/>
        </div>
    );
  }
}
