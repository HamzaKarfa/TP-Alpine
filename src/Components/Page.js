import React from 'react';
import Header from './Header';
import VersionList from './Version/VersionList';
import ColorList from './Color/ColorList';
import WheelsList from './Wheels/WheelsList';
import ScellerieList from './Scellerie/ScellerieList';
import EquipementList from './Equipement/EquipementList';
import AccessoryList from './Accessoire/AccesoireList';

const App = ()=> {

    return (
      <div className="App">
        <Header />
        <br></br>
        <h3 className="my-4  text-center">Choisissez votre <strong className="text-success">A110</strong> </h3>
        <section className="p-5 border">
          <VersionList />
        </section >
        <section className="p-5 border">
				  <h3 class="my-4 text-center" >Choisissez votre couleur </h3 >
          <ColorList />
        </section >
        <section className="p-5 border">
				  <h3 class="my-4 text-center" >Choisissez vos jantes </h3 >
          <WheelsList />
        </section >        
        <section className="p-5 border">
          <h3 class="my-4 text-center" >Choisissez votre sellerie </h3 >
          <ScellerieList />
        </section >
        <section className="p-5 border">
          <EquipementList />
        </section >
        <section className="p-5 border">
          <AccessoryList />
        </section >
      </div>
    )
  
}

export default App;