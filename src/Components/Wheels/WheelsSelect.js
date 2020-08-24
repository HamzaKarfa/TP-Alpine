import React from 'react';
import { connect } from "react-redux";

const stateWheelsSelect = (state,propsWheelsSelect) => {
    return { stateProps: propsWheelsSelect };
  };
const WheelsSelectConnect=({stateProps})=> {
    return (
			<div className=" d-flex f card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Wheels.picture[1]}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Wheels.name} </h4>
						<p className="card-text">
                            {stateProps.Wheels.description}
						</p>
						<button className="btn btn-outline-secondary">selectionner</button>
					</div>
				</div>
			</div>
    )
}

const WheelsSelect = connect(stateWheelsSelect)(WheelsSelectConnect) 

export default WheelsSelect;