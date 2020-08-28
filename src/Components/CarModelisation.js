import React from 'react';
import { connect } from "react-redux";
import "./CarModelisation.css";

const stateCarModelisation = (state) => {

    return { state: state.modelisation.car.version  };

  
};
const CarModelisationConnect=({state}) => {
    console.log(state)

    function DisplayCaroussel(){
        if (state.allPictures.blanc.standard === undefined) {
            return (Object.keys(state.allPictures.blanc.legende).map(key => (
                DisplayItemCaroussel(key,state.allPictures.blanc.legende)
            )))
        }else{
           return ( Object.keys(state.allPictures.blanc.standard).map(key => (
                DisplayItemCaroussel(key,state.allPictures.blanc.standard)
            )))
        }
        
    }
    function DisplayItemCaroussel(key,imgSrc){
        if (key === "1") {
            return (
                <div className="carousel-item active d-flex" data-interval="3000">
                    <img src={imgSrc[key]} className="img-fluid imgCaroussel"/>
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

            <div id="carouselExampleInterval" className="carousel slide w-100 h-100 col-12" data-ride="carousel">
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
  

const CarModelisation = connect(stateCarModelisation)(CarModelisationConnect) 

export default CarModelisation;