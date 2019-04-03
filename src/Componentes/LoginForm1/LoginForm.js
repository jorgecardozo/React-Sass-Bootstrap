import React, { Component } from 'react';

class LoginForm extends Component {
  
  render() {
    return (
      <div>
          <body>
              <form className="box" method="post">
                  <h1>Login</h1>
                  <input className="caja" type="text" name="" placeholder="Username"></input>
                  <input className="caja" type="password" name="" placeholder="Password"></input>
                  <input className="boton" type="submit" name="" value="Login"></input>
              </form>
          </body>
      </div>
    );
  }
}

export default LoginForm;
