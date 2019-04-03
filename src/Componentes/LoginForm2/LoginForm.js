import React, { Component } from 'react';

class LoginForm extends Component {
  
  render() {
    return (
      <div>
          <body>
              <div className="login-box">
                <h1>Login</h1>
                <div className="textbox">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username"></input>
                </div>

                <div className="textbox">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password"></input>
                </div>

                <input type="button" className="btn" value="Iniciar Sesión"></input>
              </div>
          </body>
      </div>
    );
  }
}

export default LoginForm;
