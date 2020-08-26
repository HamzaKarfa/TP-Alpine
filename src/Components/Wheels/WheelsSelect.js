import React from 'react';
import { connect } from "react-redux";

const stateWheelsSelect = (state,propsWheelsSelect) => {
	return { stateProps: propsWheelsSelect };
  };
const WheelsSelectConnect=({stateProps})=> {

	function displayWheels(){
		return (
			<div className=" d-flex  card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Wheels.picture[2]}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Wheels.name} </h4>
						<p className="card-text">
							{stateProps.Wheels.description}
						</p>
						<button className="btn btn-outline-primary">selectionner</button>
					</div>
				</div>
			</div>
		)
	}
	return (
		displayWheels()
	)
}

const WheelsSelect = connect(stateWheelsSelect)(WheelsSelectConnect) 

export default WheelsSelect;