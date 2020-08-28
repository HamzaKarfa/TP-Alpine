import React from 'react';
import { connect } from "react-redux";
import './Accessoire.css';
import AccessoireItem from './AccessoireItem';

const stateAccessorySelect = (state,propsAccessorySelect) => {
    return { stateProps: propsAccessorySelect };
  };
const AccessorySelectConnect=({stateProps})=> {
    return (
            Object.keys(stateProps.Accessory).map(key2 => (
                <div className=" d-flex col-xl-4 col-lg-6 col-sm mb-2" >
                    <AccessoireItem AccessoireItem= {stateProps.Accessory[key2]} key={key2}/>
                </div >
                    
            )))
        }
const AccessorySelect = connect(stateAccessorySelect)(AccessorySelectConnect) 

export default AccessorySelect;