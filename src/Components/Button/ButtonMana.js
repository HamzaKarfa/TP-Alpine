import React from 'react';
import { connect } from 'react-redux';
import { hitBack } from "../../action/index";
import { addPlayerTurn } from "../../action/index";
import { getMana } from "../../action/index";
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
        getManas: () => { dispatch(getMana(stateProps.player.id)) },
        playerDeads: () => { dispatch(playerDead(stateProps.player.id)) },
      }
   };


const ButtonCapacityConnect =({hitBack,stateProps,addPlayerTurns,getManas,playerDeads})=> {

        if (stateProps.player.pv <= 0) {
            addPlayerTurns()
            playerDeads()
        }
        function timeOutHitBack(){
            setTimeout(() => {
                hitBack()
            }, 600);
        }
        const mana = () => {
            if (stateProps.player.mana !== stateProps.player.manaMax && stateProps.player.mana >= 5 && !stateProps.played) {
                
                return( timeOutHitBack(),getManas(),addPlayerTurns())
            }
        }

        const activate = ()=> {

            if (stateProps.played||stateProps.player.mana < 5) {
                return 'btn btn-success material-tooltip-main mana disabled'
            }else{
                return 'btn btn-success material-tooltip-main'
            }
        }

        
        return (
            <button type="button" onClick={() => mana()} className={activate()}>
                moula
                <i className="fas fa-heart"></i> -5
                <i className="fas fa-fire-alt"></i>  5
            </button>
        )
            
            
        
}

const ButtonMana = connect(stateButtonCapacity,dispatchButtonCapacity)(ButtonCapacityConnect)


export default ButtonMana;