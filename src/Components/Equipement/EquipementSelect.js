import React     from "react";
import {connect} from "react-redux";
import './Equipement.css';

const stateEquipementSelect = (state, propsEquipementSelect) => {
			return {stateProps: propsEquipementSelect};
};
const EquipementSelectConnect = ({stateProps}) => {
			return (
				Object.keys(stateProps.Equipement).map(key2 => (
					<div className=" d-flex col-xl-4 col-lg-6 col-sm mb-2" >
						<div className="card"  id="CardEquipement">
							<img className="card-img-top img-fluid"
									src={stateProps.Equipement[key2].picture} />
							<div className="card-body p-1 mt-2" >
								<h3 className="card-title text-capitalize" >{stateProps.Equipement[key2].name}</h3 >
								<p className="card-text" >
									ajoutez  le logo de l'Alpine à votre volant
								</p >
								<button className="btn btn-outline-primary" >selectionner</button >
							</div >
						</div >
					</div >
				))
			);
};

const EquipementSelect = connect(stateEquipementSelect)(EquipementSelectConnect);

export default EquipementSelect;