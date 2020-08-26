import React from 'react';
import { connect } from "react-redux";
import {SelectWheel} from "../../action/index.js";

const stateWheelsSelect = (state,propsWheelsSelect) => {
	return { stateProps: propsWheelsSelect,
			state:state};
  };
  const dispatchWheelsSelect =(dispatch,stateProps) =>{
	return {
		SelectWheels: () => { dispatch(SelectWheel(stateProps)) }
	}
};
const WheelsSelectConnect=({stateProps,state,SelectWheels})=> {
	function displayImgWheels (){
		console.log(state)
		if (state.modelisation !== "" && state.modelisation.car.color.color === "noir") {
			return stateProps.Wheels.picture.noir
		}else if(state.modelisation !== "" && state.modelisation.car.color.color === "bleu"){
			return stateProps.Wheels.picture.bleu
		}else if(state.modelisation !== "" && state.modelisation.car.color.color === "blanc"){
			return stateProps.Wheels.picture.blanc
		}else {
			return stateProps.Wheels.picture.blanc
		}
	}
	function displayWheels(){
		return (
			<div className=" d-flex  card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={displayImgWheels()}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Wheels.name} </h4>
						<p className="card-text">
							{stateProps.Wheels.description}
						</p>
						<button className="btn btn-outline-primary" onClick={SelectWheels} >selectionner</button>
					</div>
				</div>
			</div>
		)
	}
	return (
		displayWheels()
	)
}

const WheelsSelect = connect(stateWheelsSelect,dispatchWheelsSelect)(WheelsSelectConnect) 

export default WheelsSelect;