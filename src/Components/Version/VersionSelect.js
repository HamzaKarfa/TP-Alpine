import React from 'react';
import { connect } from "react-redux";
import {SelectVersion} from "../../action/index.js";

// const dispatchButtonCapacity =(dispatch,stateProps) =>{
//     const hitBackParam=()=> {
//         if (stateProps.countPlayer === 1) {
//             return (stateProps.player.id)
//         }else{
//             return (getRandomIntInclusive(stateProps.playerList[Object.keys(stateProps.playerList)[0]].id, stateProps.countPlayer))
//         }
//     }
//     return {
//         hitMonsters: () => { dispatch(hitMonster(stateProps.player.id)) },
//         hitBack: () => { dispatch(hitBack(hitBackParam())) },
//         addPlayerTurns: () => { dispatch(addPlayerTurn(stateProps.player)) },
//         healPlayers: () => { dispatch(healPlayer(stateProps.player.id)) },
//         playerDeads: () => { dispatch(playerDead(stateProps.player.id)) },
//       }
//    };


const stateVersionSelect = (state,propsVersionSelect) => {
    return { stateProps: propsVersionSelect };
};

const dispatchVersionSelect =(dispatch,stateProps) =>{
	return {
		SelectVersions: () => { dispatch(SelectVersion(stateProps.Version)) }
	}
};
const VersionSelectConnect=({stateProps,SelectVersions})=> {

    return (
			<div className=" d-flex f card-columns">
				<div className="card">
					<img
						  className="card-img-top img-fluid"
						  src={stateProps.Version.initialPicture}
						  alt=""
					/>
					<div className="card-body">
						<h4 className="card-title text-capitalize">{stateProps.Version.name} </h4>
						<p className="card-text">
                            {stateProps.Version.description}
						</p>
						<button className="btn btn-outline-primary" onClick={SelectVersions}>selectionner</button>
					</div>
				</div>
			</div>
    )
}

const VersionSelect = connect(stateVersionSelect,dispatchVersionSelect)(VersionSelectConnect) 

export default VersionSelect;