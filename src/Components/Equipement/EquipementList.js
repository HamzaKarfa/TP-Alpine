import React from 'react';
import { connect } from "react-redux";
import EquipementSelect from './EquipementSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './Equipement.css';


const dispatchEquipementList =() =>{

};

const stateEquipementList = (state) => {
  return { EquipementList: state.car.equipements  };
};

const EquipementListConnect = ({EquipementList}) => {
    if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
        document.querySelector('.Caroussel').classList.remove('Caroussel-off')
    }
       
    function routeEquipement(key1) {
        if (key1 === "design") {
            return (
                <Route path= {"/ "}>
                    <EquipementSelect key={EquipementList[key1]} Equipement={EquipementList[key1]} name={key1}/>
                </Route>)
        }else{
            return (
                <Route path= {"/"+key1}>
                    <EquipementSelect key={EquipementList[key1]} Equipement={EquipementList[key1]} name={key1}/>
                </Route>)
        }
    }

        return (
        <Router>
            <div>
                <nav>
                    <h3 class="my-4 text-center" >Choisissez vos équipements </h3>
                    <ul className="nav p-5 mb-3 justify-content-center ">
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
        )
  
}
const EquipementList = connect(stateEquipementList,dispatchEquipementList)(EquipementListConnect) 

export default EquipementList;