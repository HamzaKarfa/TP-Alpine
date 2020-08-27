import React from 'react';
import { connect } from "react-redux";
import './Accessoire.css';

const stateAccessorySelect = (state,propsAccessorySelect) => {
    return { stateProps: propsAccessorySelect };
  };
const AccessorySelectConnect=({stateProps})=> {
    return (
            Object.keys(stateProps.Accessory).map(key2 => (
                <div className=" d-flex col-xl-4 col-lg-6 col-sm mb-2">
                   <div class="card mr-3" id="CardAccessoire">
                       <img  class="card-img-top img-fluid"
                           src={stateProps.Accessory[key2].picture}
                       />
                       <div class="card-body  p-1 mt-2" >
                           <h3 className="card-title text-capitalize" >{stateProps.Accessory[key2].name}</h3>
                           <p class="card-text" >
                               ajoutez  le logo de l'Alpine à votre volant
                           </p >
                           <button class="btn btn-outline-primary" >selectionner</button >
                       </div >
                   </div >
                </div>
                    
            )))
        }
const AccessorySelect = connect(stateAccessorySelect)(AccessorySelectConnect) 

export default AccessorySelect;