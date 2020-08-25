import React from 'react';
import Header from './Header';
import VersionList from './Version/VersionList';
import ColorList from './Color/ColorList';
import WheelsList from './Wheels/WheelsList';
import ScellerieList from './Scellerie/ScellerieList';
import EquipementList from './Equipement/EquipementList';
import AccessoryList from './Accessoire/AccesoireList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import CarModelisation from './CarModelisation';

const state = (state) => {
    return { CarElement: state.modelisation };
};
const AppConnect = ({CarElement})=> {
    const carModelisation = () =>{
        if (CarElement === "") {
            return 
        }else {
            return <CarModelisation />
        }
    }
    return (
        <>
        <Header/>
        {carModelisation()}
        <Router>
            <div>
                <nav>

                 <Link className="m-2 btn btn-primary" to="/ ">Version</Link>
        
                 <Link className="m-2 btn btn-primary" to="/Couleur">Couleur</Link>
                
                 <Link className="m-2 btn btn-primary" to="/Jantes">Jantes</Link>
               
                 <Link className="m-2 btn btn-primary" to="/Scellerie">Scellerie</Link>
                
                 <Link className="m-2 btn btn-primary"  to="/Equipement">Equipement</Link>
              
                 <Link className="m-2 btn btn-primary" to="/Accessory">Accessory</Link>
             
                </nav>

                <Switch>

                    <Route path="/ ">
                            <VersionList />
                    </Route>
                    <Route path="/Couleur">
                            <h3 class="my-4 text-center" >Choisissez votre couleur </h3 >
                            <ColorList />
                    </Route>
                    <Route path="/Jantes">
                        <h3 class="my-4 text-center" >Choisissez vos jantes </h3 >
                        <WheelsList />
                    </Route>
                    <Route path="/Scellerie">
                            <h3 class="my-4 text-center" >Choisissez votre sellerie </h3 >
                            <ScellerieList />
                    </Route>
                    <Route path="/Equipement">
                            <EquipementList />
                    </Route>
                    <Route path="/Accessory">
                            <AccessoryList />
                    </Route>
                </Switch>
            </div>
        </Router>
      </>);  
}
const App = connect(state)(AppConnect) 

export default App;