import React from 'react';
import { connect } from "react-redux";
import EquipementSelect from './EquipementSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link,Redirect} from "react-router-dom";
import './Equipement.css';
import {ResetEquipement} from "../../action/index.js";



const stateEquipementList = (state) => {
    return { EquipementList: state.car.equipements  };
};
const dispatchEquipementList =(dispatch) =>{
    return {
        ResetEquipements: () => { dispatch(ResetEquipement()) }
    }
};

const EquipementListConnect = ({EquipementList,ResetEquipements}) => {
    if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
        document.querySelector('.Caroussel').classList.remove('Caroussel-off')
    }

        return (
        <>
        <div className="row justify-content-center">
            <Link className="btn btn-outline-primary mr-3" to= {"/Accessoire/safetyTransport"}>
                Validé les équipements
            </Link>
            <button className="btn btn-outline-danger z-index-2" onClick={ResetEquipements}>
                Reset les équipements
            </button>
        </div>
            <Router>
                <div>
                    <nav>
                        <ul className="nav p-2 mb-2 justify-content-center ">
                            {Object.keys(EquipementList).map(key1 => (   
                                <li  className="p-2 text-center EquipementNav" >
                                    <Link className="btn btn-primary" to= { '/Equipement/'+key1.toString()}>
                                        {key1}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Switch>
                        <div className="container-fluid">
                            <div className="row EquipementSelect text-center">
                                {Object.keys(EquipementList).reverse().map(key1 => (  
                                    <Route path= {"/Equipement/"+key1}>
                                        <EquipementSelect key={EquipementList[key1]} Equipement={EquipementList[key1]} name={key1}/>
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
const EquipementList = connect(stateEquipementList,dispatchEquipementList)(EquipementListConnect) 

export default EquipementList;