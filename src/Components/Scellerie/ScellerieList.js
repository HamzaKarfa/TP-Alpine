import React from 'react';
import { connect } from "react-redux";
import ScellerieSelect from './ScellerieSelect';
const dispatchScellerieList =() =>{

};

const stateScellerieList = (state) => {
  return { ScellerieList: state.car.scellerie  };
};

const ScellerieListConnect = ({ScellerieList}) => {

    const displayScellerie = () => {

        return (
            <>
                {Object.keys(ScellerieList).map(key => (
                    <div className="col ScellerieList text-center mb-5">
                        <ScellerieSelect key={ScellerieList[key].id} Scellerie={ScellerieList[key]} ScellerieList={ScellerieList}/>
                    </div>
                ))}
            </>
        )
        }

    return (
        <div className="container">
        <div className='cardResponsive'>
            {displayScellerie()}
        </div>
        
        </div>
    );
  
}
const ScellerieList = connect(stateScellerieList,dispatchScellerieList)(ScellerieListConnect) 

export default ScellerieList;