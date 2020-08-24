import React from 'react';
import Header from './Header';
import VersionList from './Version/VersionList';
import ColorList from './Color/ColorList';
import WheelsList from './Wheels/WheelsList';
import ScellerieList from './Scellerie/ScellerieList';
import EquipementList from './Equipement/EquipementList';

const App = ()=> {

    return (
      <div className="App">
        <Header />
        <br></br>
        <h3 className="my-4  text-center">Choisissez votre <strong className="text-success">A110</strong> </h3>
        <section className="p-5">
          <VersionList />
        </section >
        <section className="p-5">
          <ColorList />
        </section >
        <section className="p-5">
          <WheelsList />
        </section >        
        <section className="p-5">
          <ScellerieList />
        </section >
        <section className="p-5">
          <EquipementList />
        </section >
      </div>
    )
  
}

export default App;