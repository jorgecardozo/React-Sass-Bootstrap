import React, { Component } from 'react';
import Toggle from './Toggle';

class Navegacion extends Component {

  state={
    open:true
  }

  constructor(props){
    super(props);
    
  }

  handleClick=()=>{
    this.setState({open:!this.state.open});
  }

  render() {
    return (
      <div className="principal">
        <header >
            
          <a href="/" className="logo">Logo</a>
          <Toggle click={this.handleClick}/>
          {/* <div className="menu-toggle" onClick={this.props.click}></div> */}
          {this.state.open ? console.log("abierto") : console.log("cerrado")}
          {this.state.open ?
          <nav className="active">
              <ul className="menu">
                  <li><a href="/" className="active"> Home </a>
                    <ul className="subMenu">
                      <li><a href="/">Te</a></li>
                      <li><a href="/">Amo</a></li>
                      <li><a href="/">Celee</a></li>
                    </ul>
                  </li>
                  <li><a href="/"> About </a>
                    
                  </li>
                  <li><a href="/"> Services </a>
                        <ul className="subMenu">
                            <li><a href="/">Primero</a></li>
                            <li><a href="/">Segundo</a></li>
                            <li><a href="/">Tercero</a></li>
                          </ul>
                  </li>
                  <li><a href="/"> Team </a></li>
                  <li><a href="/"> Portfolio </a></li>
                  <li><a href="/"> Contact </a></li>
              </ul>
          </nav>
         :null}
            <div className="clearFix"></div>
      
        </header>
      </div>
    );
  }
}

export default Navegacion;
