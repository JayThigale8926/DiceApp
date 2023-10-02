import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({rulesVisible, setRulesVisible, setScore, diceFace, RoleDice}) => {

    const handleRules=()=>{
        setRulesVisible((prev)=> !prev )

    }

  return (
    <Main>
        <img onClick={RoleDice} src={`/dice/dice_${diceFace}.png`} alt="dice_1_img" />
        <p>Click on dice to roll</p>
        <Button onClick={()=> setScore(0) } iswhite={false}>Reset Score</Button>
        <Button onClick={ handleRules } iswhite={true}>{rulesVisible? "Hide ":"Show "} Rules</Button>
    </Main>
  )
}

export default RollDice

const Main = styled.div`
 display: flex;
 flex-direction: column;
 gap: 25px;
 align-items: center;

 img{
    width: 250px;
    height: 250px;
    &:hover{
        cursor: pointer;
    }
 }
`;
const Button = styled.button`   
    background-color: ${ (props)=> props.iswhite ? "white" : "black"  };
    color: ${ (props)=> !props.iswhite ? "white" : "black"  };
    border: none;
    border-radius: 5px;
    width: 220px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid black;
   
    

    &:hover{
        background-color:${ (props)=> !props.iswhite ? "white" : "black"  };
        color: ${ (props)=> props.iswhite ? "white" : "black"  };
        border: 2px solid black;
        cursor: pointer;
    }
`;