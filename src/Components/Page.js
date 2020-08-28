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
import CarColorModelisation from './CarModelisation/CarColorModelisation';
import CarWheelsModelisation from './CarModelisation/CarWheelsModelisation';
import Recapitulatif from './Recapitulatif';
import './Page.css'

const state = (state) => {
    return { CarElement: state.modelisation };
};
const AppConnect = ({CarElement})=> {
    const carModelisation = () =>{
        if (CarElement === "") {
            return 
        }else{
            if (CarElement.car.version.allPictures!== undefined) {
                
           
            if (CarElement.car.version.name === "Legende") {
                if (CarElement.car.version.allPictures.blanc === undefined) {
                    return <CarColorModelisation />
                }else if (CarElement.car.version.allPictures.blanc.legende === undefined){
                    return <CarWheelsModelisation />
                }else {
                    return <CarModelisation/>
                }
            }else if(CarElement.car.version.name === "Pure"){

                if (CarElement.car.version.allPictures.blanc === undefined) {
                    return <CarColorModelisation />
                }else if (CarElement.car.version.allPictures.blanc.serac === undefined){
                    return <CarWheelsModelisation />
                }else {
                    return <CarModelisation/>
                }
            }
            }
        }
    }
    return (
        <>
        <Router>
            <div>
                  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary " >
                     <Link className="m-2 navbar-brand" to="/">ALPINE A110</Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation" >
                                <span className="navbar-toggler-icon" ></span >
                        </button >
                        <div className="collapse navbar-collapse " id="navbarNav" >
                            <ul className="navbar-nav ml-auto" >
                                <li className="nav-item active  " >
                                    <Link className="m-2 nav-link" to="/Version">Version</Link>
                                </li >
                                <li className="nav-item  active" >
                                    <Link className="m-2 nav-link" to="/Couleur">Couleur</Link>
                                </li >
                                <li className="nav-item  active" >
                                    <Link className="m-2 nav-link" to="/Jantes">Jantes</Link>
                                </li >
                                <li className="nav-item  active" >
                                    <Link className="m-2 nav-link" to="/Scellerie">Scellerie</Link>
                                </li >
                                <li className="nav-item  active" >
                                    <Link className="m-2 nav-link"  to="/Equipement">Equipement</Link>
                                </li >
                                <li className="nav-item  active" >
                                    <Link className="m-2 nav-link" to="/Accessory">Accessory</Link>
                                </li >
                                <li className="nav-item  active" >
                                    <Link className="m-2 nav-link" to="/Recapitulatif">Recapitulatif</Link>
                                </li >
                            </ul >
                        </div >
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />

                        {carModelisation()}
                    <Switch>
                        <Route path="/Version">
                                <h5 class="my-4 text-center" >Choisissez votre Version </h5>
                                <VersionList />
                        </Route>
                        <Route path="/Couleur">
                                <h5 class="my-4 text-center" >Choisissez votre couleur </h5>
                                <ColorList />
                        </Route>
                        <Route path="/Jantes">
                            <h5 class="my-4 text-center" >Choisissez vos jantes </h5 >
                            <WheelsList />
                        </Route>
                        <Route path="/Scellerie">
                                <h5 class="my-4 text-center" >Choisissez votre sellerie </h5 >
                                <ScellerieList />
                        </Route>
                        <Route path="/Equipement">
                                <h5 class="my-4 text-center" >Choisissez vos Equipements </h5 >
                                <EquipementList />
                        </Route>
                        <Route path="/Accessory">
                                <AccessoryList />
                        </Route>
                        <Route path="/Recapitulatif">
                            <Recapitulatif/>
                        </Route>
                        <Route path="/">
                            <Header/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}
const App = connect(state)(AppConnect) 

export default App;