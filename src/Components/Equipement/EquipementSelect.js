import React from 'react';
import { connect } from "react-redux";

const stateEquipementSelect = (state,propsEquipementSelect) => {
    return { stateProps: propsEquipementSelect };
  };
const EquipementSelectConnect=({stateProps})=> {
    return (
			<div className=" d-flex f card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Equipement.picture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Equipement.name} </h4>
						<button className="btn btn-outline-secondary">selectionner</button>
					</div>
				</div>
			</div>
    )
}

const EquipementSelect = connect(stateEquipementSelect)(EquipementSelectConnect) 

export default EquipementSelect;