import React, { Component } from 'react';

class DrawerToggleButton extends Component {

  render() {
    return (
      <div>
        <button className="toggle-button">
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
      </div>
    );
  }
}

export default DrawerToggleButton;
