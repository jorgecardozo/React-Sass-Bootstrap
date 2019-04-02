import React, { Component } from 'react';
//import { disconnect } from 'cluster';


class Navegacion extends Component {

  state={
    open:true
  }

  // constructor(props){
  //   super(props);
    
  // }

  

  render() {
    return (
      <div>
        <body>
          <div className="container">
            <nav>
              <input type="checkbox" id="nav" className="hidden"></input>
              <label for="nav" className="nav-btn"> 
                <i></i>
                <i></i>
                <i></i>
              </label>

              <div className="logo">
                <a href="/">BRAND</a>
              </div>
              <div class="nav-wrapper">
                        <ul>
                              <li><a href="/">Home</a></li>
                              <li><a href="/">Overview</a></li>
                              <li><a href="/">Prices</a></li>
                              <li><a href="/">Purchase</a></li>
                        </ul>
                  </div>
            </nav>
          </div>
        </body>
      </div>
      );
  }
}

export default Navegacion;
