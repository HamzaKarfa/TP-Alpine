import React from 'react';
import { connect } from "react-redux";
import VersionSelect from './VersionSelect';
import "../responsive.css";
const dispatchVersionList =() =>{

};

const stateVersionList = (state) => {
  return { VersionsList: state.car.version  };
};

const VersionListConnect = ({VersionsList}) => {
    const displayVersions = () => {    
        
            return (
            
                <div className="row versionSelect text-center mb-5">
                    {Object.keys(VersionsList).map(key => (
                        <VersionSelect key={VersionsList[key].id} Version={VersionsList[key]} VersionList={VersionsList}/>
                    ))}
                </div>
            )

        
    }

    return (
        <div className="container">
            <div className='cardResponsive'>
            {displayVersions()}
        </div>
        </div>
       
    );
  
}
const VersionList = connect(stateVersionList,dispatchVersionList)(VersionListConnect) 

export default VersionList;