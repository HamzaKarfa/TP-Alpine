import React from 'react';
import { connect } from "react-redux";
import WheelsSelect from './WheelsSelect';
const dispatchWheelsList =() =>{

};

const stateWheelsList = (state) => {
    return { WheelsList: state.car.wheels,
             state: state
    };
};

const WheelsListConnect = ({WheelsList,state}) => {

    function conditionWheelsLegend(type,key) {
        console.log(type)
        if (type.name === "Legende") {
            return (  
            <div className="col WheelsList text-center mb-5">
                <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
            </div>)
        }else{
            return
        }
        
    }
    function conditionWheelsPure(type,key) {
        console.log(type)
        if (type.name === "Standard" || type.name === "Serac" ) {
            return (  
            <div className="col WheelsList text-center mb-5">
                <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
            </div>)
        }else{
            return
        }
        
    }
    const displayWheels = () => {
        if (state.modelisation !== "" && state.modelisation.car.name === "Legende") {
            return (
                Object.keys(WheelsList).map(key => (
                    conditionWheelsLegend(WheelsList[key],key)
                ))
            )
        } else if (state.modelisation !== "" && state.modelisation.car.name === "Pure"){
            return (
                Object.keys(WheelsList).map(key => (
                    conditionWheelsPure(WheelsList[key],key)
                ))
            )
        }else{
            return (
                Object.keys(WheelsList).map(key => (
                    console.log(WheelsList[key]),
                    <div className="col WheelsList text-center mb-5">
                        <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
                    </div>
                ))
            )
        }
        }

    return (
        <div className="container">
            <div className='cardResponsive'>
                {displayWheels()}
            </div>
        </div>
    );
  
}
const WheelsList = connect(stateWheelsList,dispatchWheelsList)(WheelsListConnect) 

export default WheelsList;