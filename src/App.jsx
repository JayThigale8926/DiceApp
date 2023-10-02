import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGame =()=>{
    setIsGameStarted( (prev) => !prev );
  }

  return (
    <>
    { isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} /> }
    
    </>
  )
}

export default App
