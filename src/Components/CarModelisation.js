import React from 'react';
import { connect } from "react-redux";


const stateCarModelisation = (state) => {

    return { state: state.modelisation  };

  
};
const CarModelisationConnect=({state}) => {
    console.log(state)

    function DisplayCaroussel(){
        if (state.blanc.standard === undefined) {
            return (Object.keys(state.blanc).map(key => (
                DisplayItemCaroussel(key,state.blanc)
            )))
        }else{
           return ( Object.keys(state.blanc.standard).map(key => (
                DisplayItemCaroussel(key,state.blanc.standard)
            )))
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
        <section id="carouselExampleInterval" className="carousel slide w-75" data-ride="carousel">
            <div className="carousel-inner">
                    {DisplayCaroussel()}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </section>
    )

}
  

const CarModelisation = connect(stateCarModelisation)(CarModelisationConnect) 

export default CarModelisation;