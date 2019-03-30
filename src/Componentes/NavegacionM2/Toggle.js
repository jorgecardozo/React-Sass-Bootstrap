import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let classpath="active";
    this.props.open ? classpath="menu-toggle active" : classpath="menu-toggle";
    return (
        <div>
            {this.props.open ? console.log("abierto TOGGLE") : console.log("cerrado TOGGLE")}

            <div className={classpath} onClick={this.props.click}></div>
        </div>       
    );
  }
}

export default Toggle;
