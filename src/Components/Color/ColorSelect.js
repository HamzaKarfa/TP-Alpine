import React from 'react';
import { connect } from "react-redux";

const stateColorSelect = (state,propsColorSelect) => {
    return { stateProps: propsColorSelect };
  };
const ColorSelectConnect=({stateProps})=> {
    return (
			<div className=" d-flex f card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Color.picture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Color.name} </h4>
						<p className="card-text">
                            {stateProps.Color.name}
						</p>
						<button className="btn btn-outline-secondary">selectionner</button>
					</div>
				</div>
			</div>
    )
}

const ColorSelect = connect(stateColorSelect)(ColorSelectConnect) 

export default ColorSelect;