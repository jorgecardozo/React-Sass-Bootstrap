import React, { Component } from 'react';
import DrawerToggleButton from './DrawerToggleButton'
class Navegacion extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className="toolbar__logo">
                    <a href="/">Logo</a>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="/"> Productos </a></li>
                        <li><a href="/"> Usuarios </a></li>
                    </ul>
                </div>
            </nav>
        </header>
      </div>
    );
  }
}

export default Navegacion;
