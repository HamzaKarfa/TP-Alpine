import React from 'react';
import { connect } from "react-redux";
import ColorSelect from './ColorSelect';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './Color.css';
const dispatchColorList =() =>{

};

const stateColorList = (state) => {
  return { ColorList: state.car.color  };
};

const ColorListConnect = ({ColorList}) => {
    if (document.querySelector('.Caroussel') && document.querySelector('.Caroussel').classList.contains('Caroussel-off')) {
        document.querySelector('.Caroussel').classList.remove('Caroussel-off')
    }

    const displayColorList = () => {

        return (
            <div className="row ColorSelect text-center">
                {Object.keys(ColorList).map(key => (
                        <ColorSelect key={ColorList[key].id} Color={ColorList[key]} ColorList={ColorList}/>
                        ))}
            </div>

        )
        }

    return (
        <>
        <div className="row justify-content-center">
            <Link className="btn btn-outline-primary mb-4 " to= {"/Recapitulatif"}>
                Aller au Récapitulatif
            </Link>
		</div>
        <div className='cardResponsive'>
            {displayColorList()}
        </div>
        </>
    );
  
}
const ColorList = connect(stateColorList,dispatchColorList)(ColorListConnect) 

export default ColorList;