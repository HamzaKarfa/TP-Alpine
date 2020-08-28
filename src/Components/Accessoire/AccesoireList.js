import React from 'react';
import { connect } from "react-redux";
import AccessorySelect from './AccesoireSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './Accessoire.css';
import {ResetAccessoire} from "../../action/index.js";


const stateAccessoryList = (state) => {
  return { AccessoryList: state.car.accessory  };
};
const dispatchAccessoryList =(dispatch) =>{
    return {
        ResetAccessoires: () => { dispatch(ResetAccessoire()) }
    }
};
const AccessoryListConnect = ({AccessoryList,ResetAccessoires}) => {
        if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
            document.querySelector('.Caroussel').classList.remove('Caroussel-off')
        }
        return (
        <>
            <div className="row justify-content-center">
                <Link className="btn btn-outline-primary mr-3" to= {"/Recapitulatif"}>
                    Validé les accessoires
                </Link>
                <button className="btn btn-outline-danger " onClick={ResetAccessoires}>
                    Reset les accessoires
                </button>
            </div>
            <Router>
                <div>
                    <nav>
                        <ul className="nav p-2 mb-2 justify-content-center ">
                            {Object.keys(AccessoryList).map(key1 => (   
                                <li  className="p-2 text-center AccessoryNav" >
                                    <Link className="btn btn-primary" to= {"/Accessoire/"+key1.toString()}>
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
                                    <Route path= {"/Accessoire/"+key1}>
                                        <AccessorySelect key={AccessoryList[key1]} Accessory={AccessoryList[key1]} AccessoryList={AccessoryList} name={key1}/>
                                    </Route>
                                ))}
                            </div>
                        </div>
                    </Switch>
                </div>
            </Router>
        </>
        )
  
}
const AccessoryList = connect(stateAccessoryList,dispatchAccessoryList)(AccessoryListConnect) 

export default AccessoryList;