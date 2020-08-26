import React from 'react';
import { connect } from "react-redux";
import ColorSelect from './ColorSelect';
import "../responsive.css";
const dispatchColorList =() =>{

};

const stateColorList = (state) => {
  return { ColorList: state.car.color  };
};

const ColorListConnect = ({ColorList}) => {

    const displayColorList = () => {

        return (
            <>
                {Object.keys(ColorList).map(key => (
                    <div className="col ColorSelect text-center mb-5">
                        <ColorSelect key={ColorList[key].id} Color={ColorList[key]} ColorList={ColorList}/>
                    </div>
                ))}
            </>
        )
        }

    return (
        <div className="container">
        <div className='cardResponsive'>
            {displayColorList()}
        </div>
        </div>
    );
  
}
const ColorList = connect(stateColorList,dispatchColorList)(ColorListConnect) 

export default ColorList;