import React from 'react';
import { connect } from "react-redux";
import "../CarModelisation.css";

const stateCarWheelsModelisation = (state) => {

    return { state: state.modelisation  };

  
};
const CarWheelsModelisationConnect=({state}) => {
    function DisplayCaroussel(){
        if (state.car.version.name === "Legende") {
            if (state.allPictures === undefined) {
                return (Object.keys(state.allPictures).map(key => (
                    DisplayItemCaroussel(key,state.allPictures)
                )))
            }else{
                return (Object.keys(state.allPictures.legende).map(key => (
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
                <div className="carousel-item active d-flex" data-interval="3000">
                    <img src={imgSrc[key]} className="img-fluid imgCaroussel" />
                </div>
            )
        } else {
            return (
            <div className="carousel-item d-flex" data-interval="3000">
                <img src={imgSrc[key]} className="img-fluid imgCaroussel" />
            </div>
            )
        }
    }
    return (
        <section className="fixed-top Model container d-flex justify-content-center mb-3 Caroussel">
            <div id="carouselExampleInterval" className="carousel slide w-100 col-12" data-ride="carousel">
                <div className="carousel-inner ">
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
  

const CarWheelsModelisation = connect(stateCarWheelsModelisation)(CarWheelsModelisationConnect) 

export default CarWheelsModelisation;
