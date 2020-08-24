import React from 'react';
import { connect } from "react-redux";

const stateScellerieSelect = (state,propsScellerieSelect) => {
    return { stateProps: propsScellerieSelect };
  };
const ScellerieSelectConnect=({stateProps})=> {
    return (
			<div className=" d-flex f card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Scellerie.picture[1]}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Scellerie.name} </h4>
						<button className="btn btn-outline-secondary">selectionner</button>
					</div>
				</div>
			</div>
    )
}

const ScellerieSelect = connect(stateScellerieSelect)(ScellerieSelectConnect) 

export default ScellerieSelect;