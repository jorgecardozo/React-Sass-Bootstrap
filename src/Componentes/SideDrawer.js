import React, { Component } from 'react';

class SideDrawer extends Component {

  render() {
    return (
      <div>
        <nav className="side-drawer">
            <ul>
                <li><a href="/">Productos</a></li>
                <li><a href="/">Usuarios</a></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default SideDrawer;
