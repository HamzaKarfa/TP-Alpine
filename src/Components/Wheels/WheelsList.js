import React from 'react';
import { connect } from "react-redux";
import WheelsSelect from './WheelsSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './Wheels.css';

const dispatchWheelsList =() =>{

};

const stateWheelsList = (state) => {
    return { WheelsList: state.car.wheels,
             state: state
    };
};

const WheelsListConnect = ({WheelsList,state}) => {
    if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
        document.querySelector('.Caroussel').classList.remove('Caroussel-off')
    }

    function conditionWheelsLegend(type,key) {
        if (type.name === "Legende") {
            return (  
                <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
            )
        }else{
            return
        }
    }
    function conditionWheelsPure(type,key) {
        if (type.name === "Standard" || type.name === "Serac" ) {
            return (  
                <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
            )
        }else{
            return
        }
    }
    const displayWheels = () => {
        if (state.modelisation !== "" && state.modelisation.car.version.name === "Legende") {

            return (
            <div className="row WheelsSelect text-center mb-5">
                {Object.keys(WheelsList).map(key => (
                    conditionWheelsLegend(WheelsList[key],key)
                ))}
            </div>
            )
        } else if (state.modelisation !== "" && state.modelisation.car.version.name === "Pure"){
            return (
                <div className="row WheelsSelect text-center mb-5">
                    {Object.keys(WheelsList).map(key => (
                        conditionWheelsPure(WheelsList[key],key)
                    ))}
                </div>
            )
        }else{
            return (
                <div className="row WheelsSelect text-center mb-5">
                    {Object.keys(WheelsList).map(key => (
                        <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
                    ))}
                </div>
            )
        }
    }

    return (
        <>
        <div className="row justify-content-center">
            <Link className="btn btn-outline-primary mb-4 " to= {"/Recapitulatif"}>
                Aller au Récapitulatif
            </Link>
		</div>
        <div className='cardResponsive'>
            {displayWheels()}
        </div>
        </>
    );
  
}
const WheelsList = connect(stateWheelsList,dispatchWheelsList)(WheelsListConnect) 

export default WheelsList;