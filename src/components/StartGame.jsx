import React from 'react'
import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" />
        </div>

        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle} >Play Now</Button>
        </div>

        
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`;



const Button = styled.button`
    width: 220px;
    height: 44px;
    border-radius: 5px;
    padding: 10px, 18px, 10px, 18px;
    color: white;
    background-color: #000000;
    border: none;
    transition: 0.2s ease-in;
   
    &:hover{
        background-color: white;
        color: #000000;
        border: 2px solid #000000;
        transition: 0.2s ease-in;
        cursor: pointer;
    }
`;