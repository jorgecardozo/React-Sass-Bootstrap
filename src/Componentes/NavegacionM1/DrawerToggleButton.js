import React, { Component } from 'react';

class DrawerToggleButton extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <button className="toggle-button" onClick={this.props.click}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
      </div>
    );
  }
}

export default DrawerToggleButton;
