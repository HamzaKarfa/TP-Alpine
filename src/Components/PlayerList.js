import React from 'react';
import PlayerCard from './PlayerCard';
import { connect } from "react-redux";
import { resetTour } from "../action/index";
import './playerList.css'
const dispatchPlayerList =(dispatch) =>{
    return {
        resetTours: () => { dispatch(resetTour()) }
    }
};

const statePlayerList = (state) => {
  return { PlayersList: state.players, playerTurn : state.playerTurn  };
};

const PlayerListConnect = ({PlayersList,resetTours,playerTurn}) => {

    let countPlayer = 0
    for (var element in PlayersList) {
       countPlayer++
    }

    const displayPlayers = () => {
       
        if(Object.keys(PlayersList).length == 0){
            return (<h1 className="text-white monsterVictory">LE MONSTRE GAGNE LA MOULA</h1>)
        }
        console.log(countPlayer,playerTurn.length)
        if (playerTurn.length === countPlayer) {
            setTimeout(() => {
                return (resetTours())
            }, 1500);
        }

        return Object.keys(PlayersList).map(key => (
            <PlayerCard key={PlayersList[key].id} player={PlayersList[key]} countPlayer ={ countPlayer } playerList={PlayersList}/>
        ));
        }

    return (
        <div className='row justify-content-center'>
            {displayPlayers()}
        </div>
    );
  
}
const PlayerList = connect(statePlayerList,dispatchPlayerList)(PlayerListConnect) 

export default PlayerList;