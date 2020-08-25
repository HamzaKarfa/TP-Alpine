import React from 'react';
import { connect } from "react-redux";
import VersionSelect from './VersionSelect';
const dispatchVersionList =() =>{

};

const stateVersionList = (state) => {
  return { VersionsList: state.version  };
};

const VersionListConnect = ({VersionsList}) => {
    let carId = null
    const SelectCar = (e)=>{
        carId = e.target.getAttribute('dataIdCar')

	}
    const displayVersions = () => {    
        
        console.log(carId)
        if (carId === null) {
            return (
                <>
                    {Object.keys(VersionsList).map(key => (
                        <div className="col versionSection text-center mb-5">
                            <VersionSelect key={VersionsList[key].id} Version={VersionsList[key]} VersionList={VersionsList} SelectCar={ (e)=>SelectCar(e)}/>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <div className="col versionSection text-center mb-5">
                    <VersionSelect key={VersionsList[carId].id} Version={VersionsList[carId]} VersionList={VersionsList} />
                </div>    
                )
        }
        
    }

    return (
        <div className='row justify-content-center'>
            {displayVersions()}
        </div>
    );
  
}
const VersionList = connect(stateVersionList,dispatchVersionList)(VersionListConnect) 

export default VersionList;