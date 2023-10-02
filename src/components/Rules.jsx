import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <Main>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After click on  dice  if selected number is equal to dice number you will get same point as dice</p>
        <p>If you get wrong guess then  2 point will be dedcuted</p>
    </Main>
  )
}

export default Rules

const Main = styled.div`
    
    margin-top: 10px;
    margin:  auto ;
    max-width: 800px;
    max-height: 208px;
    border-radius: 10px;
    padding: 20px;
    
    background-color: #edededc8;

    h2{
        margin-bottom: 24px;
    }
`;