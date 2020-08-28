import React     from "react";
import {connect} from "react-redux";
import './Accessoire.css';
import {SelectAccessoire} from "../../action/index.js";

const stateAccessoireSelect = (state, propsAccessoireSelect) => {
            return {stateProps: propsAccessoireSelect,
            state: state};
};
const dispatchColorSelect =(dispatch,stateProps) =>{
	return {
		SelectAccessoires: () => { dispatch(SelectAccessoire(stateProps.AccessoireItem)) }
	}
}
const AccessoireSelectConnect = ({stateProps,SelectAccessoires,state}) => {
    function buttonAccessoire() {
        console.log(state.modelisation)
        if (state.modelisation!= '' 
            && state.modelisation.car.accessoire[stateProps.AccessoireItem.name]!== undefined
            &&state.modelisation.car.accessoire[stateProps.AccessoireItem.name].name === stateProps.AccessoireItem.name) {
            return "btn btn-outline-secondary disabled"
        }else {
            return "btn btn-outline-primary"
        }
    }
	return (
		<div className="card"  id="CardAccessoire">
			<img className="card-img-top img-fluid"
					src={"."+stateProps.AccessoireItem.picture} />
			<div className="card-body p-1 mt-2" >
				<h4 className="card-title text-capitalize" >{stateProps.AccessoireItem.name}</h4 >
				<p className="card-text" >
					{stateProps.AccessoireItem.price}€
				</p>
				<button className={buttonAccessoire()} onClick={SelectAccessoires}>selectionner</button >
			</div >
		</div >
	);
};

const AccessoireSelect = connect(stateAccessoireSelect,dispatchColorSelect)(AccessoireSelectConnect);

export default AccessoireSelect;