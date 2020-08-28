import React from 'react';
import { connect } from "react-redux";


const stateRecapitulatif = (state) => {
  return { Modelisation: state.modelisation };
};

const RecapitulatifConnect = ({Modelisation}) => {
    function displayRecapEquipement(EquipementList,key) {
        if (key === "equipement") {
            return ( Object.keys(EquipementList).map(key3 => (
                console.log(key, key3, EquipementList[key3].name),
                <li> {key+ ": "+EquipementList[key3].name} </li>
                )))
        }else if (key === "accessoire") {
            return ( Object.keys(EquipementList).map(key3 => (
                console.log(key, key3, EquipementList[key3].name),
                <li> {key + ": "+EquipementList[key3].name} </li>
            )))
        }else{
            return (
            <li>
                {key + ": "+EquipementList.name}
            </li>)
        }
    }
    const displayRecapitulatif = () => {    
        console.log(Modelisation)
            return (
            <section>
                <h3 class="my-4 text-center" >Votre Recapitulatif </h3>
                <div className="row versionSelect text-center mb-5">
                {Object.keys(Modelisation).map(key1 => (
                     console.log("MOULA",Modelisation[key1]),
                     <ul>
                        {Object.keys(Modelisation[key1]).map(key2 => (

                            console.log(key2, Modelisation[key1][key2].name),
                            displayRecapEquipement(Modelisation[key1][key2],key2)
                            ))}
                    </ul>
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