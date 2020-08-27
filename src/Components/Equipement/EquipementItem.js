import React     from "react";
import {connect} from "react-redux";
import './Equipement.css';
import {SelectEquipement} from "../../action/index.js";

const stateEquipementSelect = (state, propsEquipementSelect) => {
			return {stateProps: propsEquipementSelect};
};
const dispatchColorSelect =(dispatch,stateProps) =>{
	return {
		SelectEquipements: () => { dispatch(SelectEquipement(stateProps.EquipementItem)) }
	}
}
const EquipementSelectConnect = ({stateProps,SelectEquipements}) => {
			return (
				<div className="card"  id="CardEquipement">
					<img className="card-img-top img-fluid"
							src={stateProps.EquipementItem.picture} />
					<div className="card-body p-1 mt-2" >
						<h3 className="card-title text-capitalize" >{stateProps.EquipementItem.name}</h3 >
						<p className="card-text" >
							ajoutez  le logo de l'Alpine à votre volant
						</p >
						<button className="btn btn-outline-primary" onClick={SelectEquipements} >selectionner</button >
					</div >
				</div >
			);
};

const EquipementSelect = connect(stateEquipementSelect,dispatchColorSelect)(EquipementSelectConnect);

export default EquipementSelect;