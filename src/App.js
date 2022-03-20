import React from 'react';
import { useState } from 'react';
import './App.css';
import './components/week'
import DomainWeek from './components/week';
import Select from './components/select';
import characterData from './data/characters.json';
import weaponData from './data/weapons.json';

function App() {
  const [selectedCharacters, setCharacters] = useState([])
  const [selectedWeapons, setWeapons] = useState([])
  return (
    <div className='container'>
      <DomainWeek characters={characterData.characters} selectedCharacters={selectedCharacters} weapons={weaponData.weapons} selectedWeapons={selectedWeapons}/>
      <div className='list-container'>
        <Select data={characterData.characters} checked={selectedCharacters} setChecked={setCharacters}/>
        <Select data={weaponData.weapons} checked={selectedWeapons} setChecked={setWeapons}/>
      </div>
    </div>
  );
}

export default App;
