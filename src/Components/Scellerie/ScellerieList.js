import React from 'react';
import { connect } from "react-redux";
import ScellerieSelect from './ScellerieSelect';
import './Scellerie.css';
const dispatchScellerieList =() =>{

};

const stateScellerieList = (state) => {
  return { ScellerieList: state.car.scellerie,
            state: state  };
};

const ScellerieListConnect = ({ScellerieList,state}) => {
    if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
        document.querySelector('.Caroussel').classList.remove('Caroussel-off')
    }
    function conditionScellerieLegend(type,key) {
        console.log(state.modelisation.car.version.name)
        if (type.version === state.modelisation.car.version.name.toLowerCase()) {
            return (  
                <ScellerieSelect key={ScellerieList[key].id} Scellerie={ScellerieList[key]} ScellerieList={ScellerieList}/>
            )
        } else {
            return
        }
    }
    function conditionScelleriePure(type,key) {
        if (type.version === state.modelisation.car.version.name.toLowerCase()) {
            return (  
                <ScellerieSelect key={ScellerieList[key].id} Scellerie={ScellerieList[key]} ScellerieList={ScellerieList}/>
            )
        } else {
            return
        }


    }
    const displayScellerie = () => {
        if (state.modelisation !== "" && state.modelisation.car.version.name === "Legende") {

            return (
                <div className="row ScellerieSelect text-center mb-5">
                    {Object.keys(ScellerieList).map(key => (
                        conditionScellerieLegend(ScellerieList[key],key)
                    ))}
                </div>
            )
        } else if (state.modelisation !== "" && state.modelisation.car.version.name === "Pure"){
            return (
                <div className="row ScellerieSelect text-center mb-5">
                    {Object.keys(ScellerieList).map(key => (
                        conditionScelleriePure(ScellerieList[key],key)
                    ))}
                </div>
            )
        }else{
            return (
                <div className="row ScellerieSelect text-center mb-5">
                    {Object.keys(ScellerieList).map(key => (
                        <ScellerieSelect key={ScellerieList[key].id} Scellerie={ScellerieList[key]} ScellerieList={ScellerieList}/>
                    ))}
                </div>
            )
        }

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