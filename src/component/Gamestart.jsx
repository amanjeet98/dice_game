import React, { useState } from 'react'
import Totalscore from './Totalscore'
import { styled } from 'styled-components'
import Numberselector from './Numberselector'
import Roledice from './Roledice'

const Gamestart = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")

  const getRandomDice = ((min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  })
  const roledice = () => {
    if (!selectedNumber){
      setError("You have not selected any number")
      return;
    }
    
    
    ;
      const randomNumber = getRandomDice(1,7)
      setCurrentDice ((prev)=> randomNumber )
    
   

      if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber)
      }else{
        setScore((prev) => prev -2) 
      }

      setSelectedNumber(undefined);
  }
  return (
  <Main>
   <div className='scorer' >
   <Totalscore score={score}  />
   <Numberselector   selectedNumber={selectedNumber}   setSelectedNumber={setSelectedNumber}  setError={setError} error={error} />
   </div>
   <Roledice  currentDice={currentDice} setScore={setScore}   roledice={ roledice} />
   
   </Main>
  )
}

export default Gamestart

const Main = styled.div`
padding: 4rem 5rem 9rem 5rem;
align-items: center;
gap: 3rem;

.scorer{
 display: flex;
 align-items: center;
 justify-content: space-between;

}
`