import React from 'react';
import { connect } from "react-redux";
import {SelectColor} from "../../action/index.js";
import './Color.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
			<div className="d-flex col-lg-4 col-md-6 mb-2" >
				<div className="card" id="CardColor">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Color.picture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Color.name} </h4>
						<p className="card-text">
                            {stateProps.Color.price}
						</p>
						<Link to="/Jantes">
							<button className="btn btn-outline-primary" onClick={SelectColors}>selectionner</button>
						</Link>
					</div>
				</div>
			</div>
    )
}

const ColorSelect = connect(stateColorSelect,dispatchColorSelect)(ColorSelectConnect) 

export default ColorSelect;