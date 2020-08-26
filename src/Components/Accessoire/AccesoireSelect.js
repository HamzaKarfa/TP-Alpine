import React from 'react';
import { connect } from "react-redux";

const stateAccessorySelect = (state,propsAccessorySelect) => {
    return { stateProps: propsAccessorySelect };
  };
const AccessorySelectConnect=({stateProps})=> {
    return (
            Object.keys(stateProps.Accessory).map(key2 => (
                <div className=" d-flex card-columns">
                   <div class="card mr-3" >
                       <img  class="card-img-top img-fluid"
                           src={stateProps.Accessory[key2].picture}
                       />
                       <div class="card-body" >
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