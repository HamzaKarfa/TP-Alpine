import React from 'react';
import { connect } from "react-redux";
import {SelectColor} from "../../action/index.js";

const stateColorSelect = (state,propsColorSelect) => {
    return { stateProps: propsColorSelect };
  };
  const dispatchColorSelect =(dispatch,stateProps) =>{
	return {
		SelectColors: () => { dispatch(SelectColor(stateProps.Color)) }
	}
};
const ColorSelectConnect=({stateProps,SelectColors})=> {
    return (
			<div className=" d-flex card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Color.picture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Color.name} </h4>
						<p className="card-text">
                            {stateProps.Color.name}
						</p>
						<button className="btn btn-outline-primary" onClick={SelectColors}>selectionner</button>
					</div>
				</div>
			</div>
    )
}

const ColorSelect = connect(stateColorSelect,dispatchColorSelect)(ColorSelectConnect) 

export default ColorSelect;