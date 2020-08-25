import React from 'react';
import { connect } from "react-redux";
import AccessorySelect from './AccesoireSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
const dispatchAccessoryList =() =>{

};

const stateAccessoryList = (state) => {
  return { AccessoryList: state.accessory  };
};

const AccessoryListConnect = ({AccessoryList}) => {
       


        return (
        <Router>
            <div>
                <nav>
                    <h3 class="my-4 text-center" >Choisissez vos équipements </h3>
                    <ul className="nav p-5 mb-3 justify-content-center ">
                        {Object.keys(AccessoryList).map(key1 => (   
                            <li  className="p-2 text-center " >
                                <Link to= {key1.toString()}>
                                    {key1}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Switch>
                    {Object.keys(AccessoryList).map(key1 => (   
                        <Route path= {"/"+key1}>
                            <div className="row justify-content-center">
                                <AccessorySelect key={AccessoryList[key1]} Accessory={AccessoryList[key1]} AccessoryList={AccessoryList} name={key1}/>
                            </div>
                        </Route>
                    ))}
                </Switch>
            </div>
        </Router>
           
            


        )
    
  
}
const AccessoryList = connect(stateAccessoryList,dispatchAccessoryList)(AccessoryListConnect) 

export default AccessoryList;