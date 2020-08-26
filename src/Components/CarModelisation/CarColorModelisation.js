import React from 'react';
import { connect } from "react-redux";

const stateCarColorModelisation = (state) => {

    return { state: state.modelisation.car.version  };

  
};
const CarColorModelisationConnect=({state}) => {

    function DisplayCaroussel(){
        console.log(state)
        if (state.name === "Legende") {
            if (state.allPictures.legende === undefined) {
                return (Object.keys(state.allPictures).map(key => (
                    DisplayItemCaroussel(key,state.allPictures)
                )))
            }else{
                return ( Object.keys(state.allPictures.legende).map(key => (
                    DisplayItemCaroussel(key,state.allPictures.legende)
                )))
            }
        }else{
            if (state.allPictures.standard === undefined) {
                return ( Object.keys(state.allPictures).map(key => (
                    DisplayItemCaroussel(key,state.allPictures)
                )))
            }else{
                return ( Object.keys(state.allPictures.standard).map(key => (
                    DisplayItemCaroussel(key,state.allPictures.standard)
                )))
            }
        }
        
    }
    function DisplayItemCaroussel(key,imgSrc){
        if (key === "1") {
            return (
                <div className="carousel-item active" data-interval="3000">
                    <img src={imgSrc[key]} className="d-block w-100" />
                </div>
            )
        } else {
            return (
            <div className="carousel-item" data-interval="3000">
                <img src={imgSrc[key]} className="d-block w-100" />
            </div>
            )
        }
    }
    return (
        <section className="container d-flex justify-content-center mb-2">
            <div id="carouselExampleInterval" className="carousel slide w-75 col-8" data-ride="carousel">
                <div className="carousel-inner">
                        {DisplayCaroussel()}
                </div>
                <a className="carousel-control-prev previous" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next next " href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}
  

const CarColorModelisation = connect(stateCarColorModelisation)(CarColorModelisationConnect) 

export default CarColorModelisation;