import React from 'react';
import { connect } from "react-redux";
import {SelectWheel} from "../../action/index.js";
import './Wheels.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarWheelsModelisation from "../CarModelisation/CarWheelsModelisation";
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
			<div className="d-flex col-lg-4 col-md-6 mb-2" id="cardWheels">
				<div className="card" id="CardWheels">
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
						<Link to="/Scellerie">
							<button className="btn btn-outline-primary" onClick={SelectWheels} >selectionner</button>
						</Link>
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