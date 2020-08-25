import React from 'react';
import { connect } from "react-redux";

const stateEquipementSelect = (state,propsEquipementSelect) => {
    return { stateProps: propsEquipementSelect };
  };
const EquipementSelectConnect=({stateProps})=> {
    return (
            Object.keys(stateProps.Equipement).map(key2 => (
                <div class="card col-3 " >
                    <img  class="card-img-top "
                        src={stateProps.Equipement[key2].picture}
                    />
                    <div class="card-body" >
                        <h3>{stateProps.Equipement[key2].name}</h3>
                        <p class="card-text" >
                            ajoutez  le logo de l'Alpine à votre volant
                        </p >
                        <button class="btn btn-info" >selectionner</button >
                    </div >
                </div >
                    
            )))
        }

const EquipementSelect = connect(stateEquipementSelect)(EquipementSelectConnect) 

export default EquipementSelect;