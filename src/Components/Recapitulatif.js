import React from 'react';
import { connect } from "react-redux";

import './Recapitulatif.css'

const stateRecapitulatif = (state) => {
  return { Modelisation: state.modelisation };
};

const RecapitulatifConnect = ({Modelisation}) => {
    let price = null

    if (document.querySelector('.Caroussel')) {
        document.querySelector('.Caroussel').classList.add('Caroussel-off')
    }

    function displayRecapEquipement(EquipementList,key) {
        
        if (key === "equipement") {
            return ( Object.keys(EquipementList).map(key3 => (
                console.log(key, key3, EquipementList[key3].name),
                price += EquipementList[key3].price,
                <li className="list-group-item list-group-item-primary"> {key+ " : "+EquipementList[key3].name +" = " +EquipementList[key3].price + " €"} </li>
                )))
        }else if (key === "accessoire") {
            return ( Object.keys(EquipementList).map(key3 => (
                price += EquipementList[key3].price,
                console.log(key, key3, EquipementList[key3].name),
                <li className="list-group-item list-group-item-primary"> {key + " : "+EquipementList[key3].name +" = "  +EquipementList[key3].price + " €"} </li>
            )))
        }else{
            return (
            
                price += EquipementList.price,
            <li className="list-group-item list-group-item-primary">
                {key + " : " + EquipementList.name + " =  "  +EquipementList.price + " €"}
            </li>)
        }
    }
    const displayRecapitulatif = () => {    
        console.log(Modelisation)
            return (

            <section className="Recapitulatif">
                <h1 class="my-4 text-center text-uppercase text-primary" >Votre Recapitulatif </h1>
                <div className="row versionSelect text-center mb-5">
                {Object.keys(Modelisation).map(key1 => (
                     console.log("MOULA",Modelisation[key1]),
                     <div>
                     <ul className="list-group">
                        {Object.keys(Modelisation[key1]).map(key2 => (

                            console.log(key2, Modelisation[key1][key2].name),
                            displayRecapEquipement(Modelisation[key1][key2],key2)
                            ))}
                    </ul>
                         <div className="separator text-primary "></div>
                    <h3 className="text-primary text-capitalize mt-3">Prix total : {price + " €"}</h3>
                    </div>
                 ))}
                </div>
            </section>
            )

        
    }

    return (
        <div className="container">
            <div className='cardResponsive'>
            {displayRecapitulatif()}
        </div>
        </div>
       
    );
  
}
const Recapitulatif = connect(stateRecapitulatif)(RecapitulatifConnect) 

export default Recapitulatif;