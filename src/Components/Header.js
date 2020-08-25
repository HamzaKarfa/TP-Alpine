import React from 'react';
import { connect } from "react-redux";
import  "./Header.css";


const stateHeader = (state) => {
};
const HeaderConnect=( ) => {

    return (		
    <header className="col my-5" >
        <h1 className="text-uppercase text-center display-3 text-primary" >alpine</h1 >
        <div className="col text-center" >
            <p className="lead" >La vitesse made in French</p >
            <p className="blockquote-footer" >
                Configurez votre Alpine selon vos préférences en sélectionnant parmi
                l'ensemble des  couleurs,équipements et accessoires proposés.
            </p >
        </div >
    </header >
);

}
  

const Header = connect(stateHeader)(HeaderConnect) 

export default Header;