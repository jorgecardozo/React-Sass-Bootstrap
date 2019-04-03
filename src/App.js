import React, { Component } from 'react';
//import PruebaStyle from './Componentes/PruebaStyle'
//import Navegacion from './Componentes/NavegacionM2/Navegacion';
import NavegacionM3 from './Componentes/NavegacionM3/Navegacion';
import LoginForm from './Componentes/LoginForm1/LoginForm';
// import Main from './Componentes/NavegacionM1/Main';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div>
        {/* <Main/>  */}
        {/* <Navegacion/> */}
        {/* <NavegacionM3/> */}
        <LoginForm/>
      </div>
    );
  }
}

export default App;
