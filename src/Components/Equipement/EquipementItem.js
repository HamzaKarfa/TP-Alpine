import React     from "react";
import {connect} from "react-redux";
import './Equipement.css';
import {SelectEquipement} from "../../action/index.js";

const stateEquipementSelect = (state, propsEquipementSelect) => {
            return {stateProps: propsEquipementSelect,
            state: state};
};
const dispatchColorSelect =(dispatch,stateProps) =>{
	return {
		SelectEquipements: () => { dispatch(SelectEquipement(stateProps.EquipementItem)) }
	}
}
const EquipementSelectConnect = ({stateProps,SelectEquipements,state}) => {
    function buttonEquipement() {
        if (state.modelisation!= '' && state.modelisation.car.equipement !== undefined
            && state.modelisation.car.equipement[stateProps.EquipementItem.name]!== undefined
            &&state.modelisation.car.equipement[stateProps.EquipementItem.name].name === stateProps.EquipementItem.name) {
            return "btn btn-outline-secondary disabled"
        }else {
            return "btn btn-outline-primary"
        }
    }
	return (
		<div className="card"  id="CardEquipement">
			<img className="card-img-top img-fluid"
					src={'.'+stateProps.EquipementItem.picture} />
			<div className="card-body p-1 mt-2" >
				<h4 className="card-title text-capitalize" >{stateProps.EquipementItem.name}</h4 >
				<p className="card-text" >
					{stateProps.EquipementItem.price}€
				</p>
				<button className={buttonEquipement()} onClick={SelectEquipements}>selectionner</button >
			</div >
		</div >
	);
};

const EquipementSelect = connect(stateEquipementSelect,dispatchColorSelect)(EquipementSelectConnect);

export default EquipementSelect;