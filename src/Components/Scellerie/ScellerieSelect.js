import React from 'react';
import { connect } from "react-redux";
import './Scellerie.css';
import {SelectScellerie} from "../../action/index.js";


const stateScellerieSelect = (state,propsScellerieSelect) => {
    return { stateProps: propsScellerieSelect };
  };
const dispatchScellerieSelect =(dispatch,stateProps) =>{
	return {
		SelectScelleries: () => { dispatch(SelectScellerie(stateProps.Scellerie)) }
	}
};
const ScellerieSelectConnect=({stateProps,SelectScelleries})=> {

    return (
			<div className="d-flex col-lg-4 col-md-6 mb-2">
				<div className="card" id="CardScellerie">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Scellerie.picture[1]}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Scellerie.name} </h4>
						<button className="btn btn-outline-primary" onClick={SelectScelleries}>selectionner</button>
					</div>
				</div>
			</div>
    )
}

const ScellerieSelect = connect(stateScellerieSelect,dispatchScellerieSelect)(ScellerieSelectConnect) 

export default ScellerieSelect;