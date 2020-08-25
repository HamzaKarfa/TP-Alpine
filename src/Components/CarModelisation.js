import React from 'react';
import { connect } from "react-redux";


const stateCarModelisation = (state) => {

    return { state: state.modelisation  };

  
};
const CarModelisationConnect=({state}) => {

    return (		
        <section className="p-5">
            <h3 className="text-center">Représentation de votre voiture</h3>
            <div className="card">
                <img className ="card-img" src={state} alt=""/>
            </div>
        </section>
    );

}
  

const CarModelisation = connect(stateCarModelisation)(CarModelisationConnect) 

export default CarModelisation;