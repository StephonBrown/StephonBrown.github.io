import React, { Component } from 'react';
import NavbarComponent from './Components/NavbarComponent';
import TopParticleCanvas from './Components/TopParticleCanvas';
import Summary from './Components/Summary';
import Portfolio from './Components/Portfolio';
import ContactInformation from './Components/ContactInformation';
import BottomParticleCanvas from './Components/BottomParticleCanvas';

class App extends Component {
  render() {
    return (
      <div id ="entirePage">
        <NavbarComponent/>
        <header id={"particleDiv"} className="padded-container">
          <h1 id="title">Welcome to Innovation<span className = "blink">_</span></h1> 
          <TopParticleCanvas/>
        </header>
          <Summary/>
          <Portfolio/>
          <div style={{marginBottom: 0, paddingBottom: 0}}>
            <ContactInformation/>
            <BottomParticleCanvas/>
          </div>
        <footer  style={{marginTop: -5}}>
          Designed and Coded by Stephon Brown
        </footer>
      </div>
    );
  };
}

export default App;
