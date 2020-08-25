import React from 'react';
import { connect } from "react-redux";

const stateVersionSelect = (state,propsVersionSelect) => {
    return { stateProps: propsVersionSelect };
  };
const VersionSelectConnect=({stateProps})=> {

    return (
			<div className=" d-flex f card-columns">
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
						<button className="btn btn-outline-secondary" dataIdCar={stateProps.Version.id} onClick ={(e)=>stateProps.SelectCar(e)}>selectionner</button>
					</div>
				</div>
			</div>
    )
}

const VersionSelect = connect(stateVersionSelect)(VersionSelectConnect) 

export default VersionSelect;