import React from 'react';
import { connect } from "react-redux";
import EquipementSelect from './EquipementSelect';
const dispatchEquipementList =() =>{

};

const stateEquipementList = (state) => {
  return { EquipementList: state.equipements  };
};

const EquipementListConnect = ({EquipementList}) => {

    const displayEquipement = () => {

        return (
            <>
                {Object.keys(EquipementList).map(key1 => (
                    Object.keys(EquipementList[key1]).map(key2 => (
                        <div className="col EquipementList text-center mb-5">
                            <EquipementSelect key={EquipementList[key1][key2].id} Equipement={EquipementList[key1][key2]} EquipementList={EquipementList}/>
                        </div>
                    ))
                ))}
            </>
        )
        }

    return (
        <div className='row justify-content-center'>
            {displayEquipement()}
        </div>
    );
  
}
const EquipementList = connect(stateEquipementList,dispatchEquipementList)(EquipementListConnect) 

export default EquipementList;