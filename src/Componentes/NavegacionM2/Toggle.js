import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
            <div className="menu-toggle" onClick={this.props.click}></div>
        </div>       
    );
  }
}

export default Toggle;
