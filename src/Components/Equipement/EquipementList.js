import React from 'react';
import { connect } from "react-redux";
import EquipementSelect from './EquipementSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
const dispatchEquipementList =() =>{

};

const stateEquipementList = (state) => {
  return { EquipementList: state.car.equipements  };
};

const EquipementListConnect = ({EquipementList}) => {
       
    function routeEquipement(key1) {
        if (key1 === "design") {
            return (
                <Route path= {"/"}>
                    <div className="container">
                        <div className="cardResponsive">
                            <EquipementSelect key={EquipementList[key1]} Equipement={EquipementList[key1]} EquipementList={EquipementList} name={key1}/>
                        </div>
                    </div>
                </Route>)
        }else{
            return (
                <Route path= {"/"+key1}>
                    <div className="container">
                        <div className="cardResponsive">
                            <EquipementSelect key={EquipementList[key1]} Equipement={EquipementList[key1]} EquipementList={EquipementList} name={key1}/>
                        </div>
                    </div>
                </Route>)
        }
    }
    function linkEquipement(key1) {
        if (key1 === "design") {
            return (
                <Link className="btn btn-primary" to= {key1.toString()}>
                {key1}
                </Link>)
        }else{
            return (
                <Link className="btn btn-primary" to= {key1.toString()}>
                    {key1}
                </Link>)
        }
    }

        return (
        <Router>
            <div>
                <nav>
                    <h3 class="my-4 text-center" >Choisissez vos équipements </h3>
                    <ul className="nav p-5 mb-3 justify-content-center ">
                        {Object.keys(EquipementList).map(key1 => (   
                            <li  className="p-2 text-center " >
                                <Link className="btn btn-primary" to= {key1.toString()}>
                                    {key1}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Switch>
                    {Object.keys(EquipementList).reverse().map(key1 => (  
                        routeEquipement(key1)

                    ))}
                </Switch>
            </div>
        </Router>
           
            


        )
    
  
}
const EquipementList = connect(stateEquipementList,dispatchEquipementList)(EquipementListConnect) 

export default EquipementList;