import React from 'react';
import { connect } from "react-redux";
import {SelectVersion} from "../../action/index.js";
import './Version.css'

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
			<div className=" d-flex col-lg-6 mb-2" id="CardVersion">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Version.initialPicture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Version.name} </h4>
						<p className="card-text">
                            {stateProps.Version.description}
						</p>
						<button className="btn btn-outline-primary" onClick={SelectVersions}>selectionner</button>
					</div>
				</div>
			</div>
    )
}

const VersionSelect = connect(stateVersionSelect,dispatchVersionSelect)(VersionSelectConnect) 

export default VersionSelect;