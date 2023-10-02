import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [Selected, setSelected] = useState();
  const [diceFace, setDiceFace] = useState(1);
  const [error, setError] = useState();
  const [rulesVisible, setRulesVisible] = useState(false);

  const RoleDice = ()=>{
    if(!Selected) {
      setError("Please select a number");
      return
    };
    setDiceFace(Math.floor((Math.random() * 6) + 1 )) ;

    if(diceFace === Selected){
      setScore( (prev)=> prev+diceFace  );
     
    }
    else{
      setScore( (prev)=> prev-2  );
    }
    setSelected(undefined);
  }

  

  return (
      <div>
        <Main>
          <div className='totalscore'>
            <TotalScore score={score} />
          </div>

          <div className='numberselector'>
            <NumberSelector setError={setError} error={error} Selected={Selected} setSelected={setSelected} />
          </div>
        </Main>
        
        <div className='rolldice'>
          <RollDice rulesVisible={rulesVisible} setRulesVisible={setRulesVisible} diceFace={diceFace} RoleDice={RoleDice} setScore={setScore} />
        </div>

        <div className='rules'>
          { rulesVisible && <Rules />}
        </div>

      </div>

      
  )
}

export default GamePlay

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    margin : 64px 80px 24px 80px;
    align-items: center;
    
    
`;
