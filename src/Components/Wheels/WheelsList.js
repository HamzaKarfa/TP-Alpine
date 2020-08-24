import React from 'react';
import { connect } from "react-redux";
import WheelsSelect from './WheelsSelect';
const dispatchWheelsList =() =>{

};

const stateWheelsList = (state) => {
  return { WheelsList: state.wheels  };
};

const WheelsListConnect = ({WheelsList}) => {

    const displayWheels = () => {
        return (
            <>
                {Object.keys(WheelsList).map(key => (
                    <div className="col WheelsList text-center mb-5">
                        <WheelsSelect key={WheelsList[key].id} Wheels={WheelsList[key]} WheelsList={WheelsList}/>
                    </div>
                ))}
            </>
        )
        }

    return (
        <div className='row justify-content-center'>
            {displayWheels()}
        </div>
    );
  
}
const WheelsList = connect(stateWheelsList,dispatchWheelsList)(WheelsListConnect) 

export default WheelsList;