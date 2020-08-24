import React from 'react';
import { connect } from 'react-redux';
import { hitBack } from "../../action/index";
import { addPlayerTurn } from "../../action/index";
import { healPlayer } from "../../action/index";
import { playerDead } from "../../action/index";
import "./animation.css"


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min +1)) + min;
    return result
  }
const stateButtonCapacity = (state,propsButtonCapacity) => {
    return { stateProps: propsButtonCapacity, players : state.players };
};
const dispatchButtonCapacity =(dispatch,stateProps) =>{
    const hitBackParam=()=> {
        if (stateProps.countPlayer === 1) {
            return (stateProps.player.id)
        }else{
            return (getRandomIntInclusive(stateProps.playerList[Object.keys(stateProps.playerList)[0]].id, stateProps.countPlayer))
        }
    }
    return {
        hitBack: () => { dispatch(hitBack(hitBackParam())) },
        addPlayerTurns: () => { dispatch(addPlayerTurn(stateProps.player)) },
        healPlayers: () => { dispatch(healPlayer(stateProps.player.id)) },
        playerDeads: () => { dispatch(playerDead(stateProps.player.id)) },
      }
   };


const ButtonCapacityConnect =({hitBack,stateProps,addPlayerTurns,healPlayers,playerDeads})=> {
        if (stateProps.player.pv <= 0) {
            addPlayerTurns()
            playerDeads()
        }
        function timeOutHitBack(){
            setTimeout(() => {
                hitBack()
            }, 600);
        }
        const heal = () => {
            if (stateProps.player.pv !== stateProps.player.pvMax 
                && stateProps.player.mana >= 5 
                && !stateProps.played
                ) {
                
                return( timeOutHitBack(),healPlayers(),addPlayerTurns())
            }
        }

        const activate = ()=> {

            if (stateProps.played || stateProps.player.mana < 5) {
                return 'btn btn-success material-tooltip-main heal disabled'
            }else{
                return 'btn btn-success material-tooltip-main '
            }
        }
        
        return (
            <button type="button" onClick={() => heal()} className={activate()}>
                Heal
                <i className="fas fa-heart"></i> -5
                <i className="fas fa-fire-alt"></i>  5
            </button>
        )
            
            
}

const ButtonHeal = connect(stateButtonCapacity,dispatchButtonCapacity)(ButtonCapacityConnect)


export default ButtonHeal;