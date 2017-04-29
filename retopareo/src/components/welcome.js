import React, { Component } from 'react';
import Top from './top';
import Social from './social';

class Welcome extends Component {
  render() {
    return (
      <div className='welcome adapt'>
        <Top intro="true" />
        <div className="app-footer">
          <Social />
        </div>
    </div>
    );
  }
}

export default Welcome;
