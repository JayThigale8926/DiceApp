import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ( {setError, error, Selected, setSelected} ) => {
    const num = [1,2,3,4,5,6];
    
    const handleErrAndSetSelected = (value)=>{
        setSelected(value);
        setError('');
    }

    return (

        <MainContainer>
            <p className='error'>{error}</p>
        <div className='flex'>

            { num.map( (value, index)=> 
                <Box onClick={ ()=>handleErrAndSetSelected(value) } isselected={Selected === value }key={index} >{value}</Box> )}
           
        </div>
            <p>Select Number</p>
        </MainContainer>
        
    )
}

export default NumberSelector

const MainContainer = styled.div`

    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        text-align: end ;
        padding-top: 20px;
        padding-bottom: 0px;
    }
    .error{
        color: red;
    }
`;

const Box = styled.div`
    background-color: white;
    border: 2px solid black;
    color: black;
    height: 72px;
    width: 72px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    transition: 0.2s ease-in;
    background-color: ${ (props)=> (props.isselected ? "black" : "white") };
    color: ${ (props)=> (!props.isselected ? "black" : "white") };

    &:hover{
        cursor: pointer;
        transition: 0.2s ease-in;
    }
`;