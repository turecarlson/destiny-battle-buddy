import React from 'react';
import NavbarComponent from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import characterOne from '../src/Images/test1.png';
import characterTwo from '../src/Images/test2.png';
import characterThree from '../src/Images/test3.png';
import CharacterSearch from './components/CharacterFrame/CharacterSearch';
import CharacterFrame from './components/CharacterFrame/CharacterFrame';

function App() {
  return (
    <div className="App">
      <NavbarComponent ></NavbarComponent>
      <div className="content">
      <header className="App-header">
        <CharacterSearch></CharacterSearch>
      </header>
      <div className='character-frame'>
      <CharacterFrame
      img={characterOne}
      >
      </CharacterFrame>
      <CharacterFrame
      img={characterTwo}
      >
      </CharacterFrame>
      <CharacterFrame
      img={characterThree}
      >
      </CharacterFrame>
      </div>
      </div>
    </div>
  );
}

export default App;
