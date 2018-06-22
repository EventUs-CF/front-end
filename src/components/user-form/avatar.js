import React from 'react';
import PropTypes from 'prop-types';
import avatar01 from '../../assets/avatars/avatar-01.png';
import avatar02 from '../../assets/avatars/avatar-02.png';
import avatar03 from '../../assets/avatars/avatar-03.png';
import avatar04 from '../../assets/avatars/avatar-04.png';
import avatar05 from '../../assets/avatars/avatar-05.png';
import avatar06 from '../../assets/avatars/avatar-06.png';

import autoBind from '../../utils/auto-bind';

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Avatar);
  }

  handleClick(e) {
    const imgSrc = e.target.getAttribute('src');
    this.props.onAvatar(imgSrc);
  }

  render() {
    return (
      <div className='avatar'>
        <p>Click on an image to select your avatar!</p>
        <ul className='avatar-list'>
          <li><img src={avatar01} onClick={this.handleClick}/></li>
          <li><img src={avatar02} onClick={this.handleClick}/></li>
          <li><img src={avatar03} onClick={this.handleClick}/></li>
          <li><img src={avatar04} onClick={this.handleClick}/></li>
          <li><img src={avatar05} onClick={this.handleClick}/></li>
          <li><img src={avatar06} onClick={this.handleClick}/></li>
        </ul>
      </div>
    );
  }
}

Avatar.propTypes = {
  onAvatar: PropTypes.func,
};
