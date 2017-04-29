import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <div className='social'>
        <ul className="navbar-social">
          <li><a className="facebook" href="https://www.facebook.com/soul4fit">Facebook</a></li>
          <li><a className="instagram" href="https://www.instagram.com/soul4fit/">Instagram</a></li>
          <li><a className="youtube" href="https://www.youtube.com/channel/UC6DqagtV_giq_u2utsMw1kwfa">Youtube</a></li>
        </ul>
      </div>
    );
  }
}

export default Social;
