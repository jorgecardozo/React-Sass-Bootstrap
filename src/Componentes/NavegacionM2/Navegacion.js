import React, { Component } from 'react';

class Navegacion extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="principal">
        <header className="">
            
            <a href="/" className="logo">Logo</a>
            <div class="menu-toggle"></div>
            <nav className="active">
                <ul>
                    <li><a href="/" className="active"> Home </a></li>
                    <li><a href="/"> About </a></li>
                    <li><a href="/"> Services </a></li>
                    <li><a href="/"> Team </a></li>
                    <li><a href="/"> Portfolio </a></li>
                    <li><a href="/"> Contact </a></li>
                </ul>
            </nav>
            <div className="clearFix"></div>
        </header>
      </div>
    );
  }
}

export default Navegacion;
