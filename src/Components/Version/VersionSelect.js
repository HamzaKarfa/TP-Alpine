import React from 'react';
import { connect } from "react-redux";
import {SelectVersion} from "../../action/index.js";
import './Version.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const stateVersionSelect = (state,propsVersionSelect) => {
    return { stateProps: propsVersionSelect };
};

const dispatchVersionSelect =(dispatch,stateProps) =>{
	return {
		SelectVersions: () => { dispatch(SelectVersion(stateProps.Version)) }
	}
};
const VersionSelectConnect=({stateProps,SelectVersions})=> {

    return (
			<div className=" d-flex col-lg-6 mb-2" >
				<div className="card" id="CardVersion">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Version.initialPicture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Version.name} </h4>
						<p className="card-text">
                            {stateProps.Version.price}
						</p>
						<Link to="/Couleur">
							<button className="btn btn-outline-primary" onClick={SelectVersions}>selectionner</button>
						</Link>
					</div>
				</div>
			</div>
    )
}

const VersionSelect = connect(stateVersionSelect,dispatchVersionSelect)(VersionSelectConnect) 

export default VersionSelect;