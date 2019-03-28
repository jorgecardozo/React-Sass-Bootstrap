import React, { Component } from 'react';
import Navegacion from './Navegacion';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop'

class Main extends Component {
  state={
    sideDrawerOpen: false
  };
  drawlerToggleClickHandler =()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backdropClickHandler=()=>{
    this.setState({sideDrawerOpen: false});
  }

  render() {
    //let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      //sideDrawer= <SideDrawer/>;
      backdrop= <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}>
        <Navegacion drawerClickHandler={this.drawlerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop }
        <main style={{marginTop: '64px'}}>
          <p>Este es el primer parrafo de toda la oración</p>
        </main>  
      </div>
    );
  }
}

export default Main;
