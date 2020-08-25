import React from 'react';
import Header from './Header';
import VersionList from './Version/VersionList';
import ColorList from './Color/ColorList';
import WheelsList from './Wheels/WheelsList';
import ScellerieList from './Scellerie/ScellerieList';
import EquipementList from './Equipement/EquipementList';
import AccessoryList from './Accessoire/AccesoireList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = ()=> {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Version">Version</Link>
                        </li>
                        <li>
                            <Link to="/Couleur">Couleur</Link>
                        </li>
                        <li>
                            <Link to="/Jantes">Jantes</Link>
                        </li>
                        <li>
                            <Link to="/Scellerie">Scellerie</Link>
                        </li>
                        <li>
                            <Link to="/Equipement">Equipement</Link>
                        </li>
                        <li>
                            <Link to="/Accessory">Accessory</Link>
                        </li>
                    </ul>
                </nav>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Version">
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
      );  
}

export default App;