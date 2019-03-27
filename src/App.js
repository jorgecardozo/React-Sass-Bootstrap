import React, { Component } from 'react';
import PruebaStyle from './Componentes/PruebaStyle'
import Navegacion from './Componentes/Navegacion';
import SideDrawer from './Componentes/SideDrawer';
import Backdrop from './Componentes/Backdrop';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
         {/* <PruebaStyle/> */}
        <Navegacion/>
        <SideDrawer/>
        <Backdrop/>
        <main style={{marginTop: '64px'}}>
          <p>Este es el primer parrafo de toda la oración</p>
        </main>

        
      </div>
    );
  }
}

export default App;
