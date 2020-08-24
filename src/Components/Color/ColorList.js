import React from 'react';
import { connect } from "react-redux";
import ColorSelect from './ColorSelect';
const dispatchColorList =() =>{

};

const stateColorList = (state) => {
  return { ColorList: state.color  };
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
        <div className='row justify-content-center'>
            {displayColorList()}
        </div>
    );
  
}
const ColorList = connect(stateColorList,dispatchColorList)(ColorListConnect) 

export default ColorList;