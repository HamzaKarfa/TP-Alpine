import React from 'react';
import { connect } from "react-redux";
import AccessorySelect from './AccesoireSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './Accessoire.css';

const dispatchAccessoryList =() =>{

};

const stateAccessoryList = (state) => {
  return { AccessoryList: state.car.accessory  };
};

const AccessoryListConnect = ({AccessoryList}) => {
        if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
            document.querySelector('.Caroussel').classList.remove('Caroussel-off')
        }
        function routeAccessoire(key1) {
            if (key1 === "safetyTransport") {
                return (
                    <Route path= {"/"}>
                        <AccessorySelect key={AccessoryList[key1]} Accessory={AccessoryList[key1]} AccessoryList={AccessoryList} name={key1}/>
                    </Route>)
            }else{
                return (
                    <Route path= {"/"+key1}>
                        <AccessorySelect key={AccessoryList[key1]} Accessory={AccessoryList[key1]} AccessoryList={AccessoryList} name={key1}/>
                    </Route>)
            }
        }
        return (
            <Router>
                <div>
                    <nav>
                        <h3 class="my-4 text-center" >Choisissez vos équipements </h3>
                        <ul className="nav p-5 mb-3 justify-content-center ">
                            {Object.keys(AccessoryList).map(key1 => (   
                                <li  className="p-2 text-center AccessoryNav" >
                                    <Link className="btn btn-primary" to= {key1.toString()}>
                                        {key1}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Switch>
                        <div className="container">
                            <div className="row AccessoireSelect text-center">
                                {Object.keys(AccessoryList).reverse().map(key1 => (  
                                        routeAccessoire(key1)
                                ))}
                            </div>
                        </div>
                    </Switch>
                </div>
            </Router>
        )
  
}
const AccessoryList = connect(stateAccessoryList,dispatchAccessoryList)(AccessoryListConnect) 

export default AccessoryList;