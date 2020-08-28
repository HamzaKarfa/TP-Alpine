import React from "react";
import {connect} from "react-redux";
import "./Header.css";


const stateHeader = (state) => {
};
const HeaderConnect = () => {
			if (document.querySelector(".Caroussel")) {
						document.querySelector(".Caroussel").classList.add("Caroussel-off");
			}
			return (
							<header className="col header" >
        <img
				        className="imgHeader img-fluid"
				        src="/asset/sources-homepage/versions/ALPINE-PURE-1.png"
				        alt="" />
        <div className="col text-center headerDiv my-5" >
             <h1 className="text-uppercase text-center display-3 text-primary" >alpine</h1 >
            <p className="lead" >La vitesse made in French</p >
            <p className="blockquote-footer" >
                Configurez votre Alpine selon vos préférences en sélectionnant parmi
                l'ensemble des  couleurs,équipements et accessoires proposés.
            </p >
            <a
				            className="btn btn-lg btn-outline-primary animate__animated animate__delay-1s animate__heartBeat animate__infinite"
				            href="/Version" >Commencer votre configuration</a >
        </div >
    </header >
			);
			
};


const Header = connect(stateHeader)(HeaderConnect);

export default Header;