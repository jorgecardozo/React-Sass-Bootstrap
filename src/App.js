import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <div className="divPrueba1">
          Sass (Syntactically Awesome Stylesheets) es un lenguaje de hoja de estilos inicialmente diseñado por 
          Hampton Catlin y desarrollado por Nathan Weizenbaum.1​2​Después de sus versiones iniciales, Nathan Weizenbaum 
          y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los 
          ficheros Sass.
        </div>
 
        <div className="container-secundario">
          <p>
            Sass es un metalenguaje de Hojas de Estilo en Cascada (CSS). Es un lenguaje de script que es traducido a CSS.
          </p>
          <h3>
            SassScript es el lenguaje de script en sí mismo. Sass consiste en dos sintaxis. La sintaxis original, llamada 
            indented syntax («sintaxis con sangrado») que usa una sintaxis similar al Haml.3​ Este usa la indentación para 
            separar bloques de código y el carácter nueva línea para separar reglas. La sintaxis más reciente, SCSS, usa el 
            formato de bloques como CSS. Este usa llaves para denotar bloques de código y punto y coma (;) para separar las 
            líneas dentro de un bloque. La sintaxis indentada y los ficheros SCSS tienen las extensiones .sass y .scss respectivamente.
          </h3>

          <ul>
            <li>Primero</li>
            <li>Segundo</li>
            <li>Tercero</li>
          </ul>
        </div>

        <button className="boton-principal">Eliminar</button>
        <button className="boton-secundario">Cancelar</button>

      </div>
    );
  }
}

export default App;
