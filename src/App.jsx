import React, { useState } from 'react'
import Startgame from './component/Startgame'
import Gamestart from './component/Gamestart'

const App = () => {
  const [isGameStart, setIsGameStart] = useState(false)

  const toggleGameStart = () => {
    setIsGameStart((prev) => !prev);
  }
  return (
  <>
  {  isGameStart ? <Gamestart/> : <Startgame toggle={toggleGameStart} /> }
  
  </>
  )
}

export default App

