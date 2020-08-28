import React     from "react";
import {connect} from "react-redux";
import './Equipement.css';
import EquipementItem from './EquipementItem';

const stateEquipementSelect = (state, propsEquipementSelect) => {
			return {stateProps: propsEquipementSelect};
};

const EquipementSelectConnect = ({stateProps}) => {
			return (
				Object.keys(stateProps.Equipement).map(key2 => (
					<div className=" d-flex col-xl-4 col-lg-6 col-sm mb-2" >
						<EquipementItem EquipementItem= {stateProps.Equipement[key2]} key={key2}/>
					</div >
				))
			);
};

const EquipementSelect = connect(stateEquipementSelect)(EquipementSelectConnect);

export default EquipementSelect;