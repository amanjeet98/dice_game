import React, { useState } from 'react'
import { styled } from 'styled-components'
import Showrules from './Showrules'

const Roledice = ({
  currentDice ,  roledice , setScore
}) => {
const resetScore = () =>{
  setScore(0)
}
const [rules, setRules] = useState(false)
 

  return (
   <Main>
      <div className='dice' onClick={roledice} >
       <img src={`images/dices/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
      <button onClick={resetScore} className='white-button' >Reset Score</button>
      <br/>
      <button 
      onClick={() => setRules((prev)=> !prev)}
      className='black-btn' >{rules ? "Hide":"Show"} Rules</button>
      {rules && <Showrules/>}
      
      
      
   </Main>
  )
}

export default Roledice

const Main = styled.div`
text-align: center;
 margin-top: 3rem;
 .dice{
  display: flex;
 justify-content: center;
 cursor: pointer;
 }
 p{
  color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 0.94rem;
 }
 .white-button{
width: 13.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.3125rem;
border: 1px solid #000;
background: #FFF;
margin-top: 2.25rem;
&:hover{
  scale: 0.98;
 box-shadow:0.5rem 0.5rem 5rem black ;
 background-color: black;
 color: white;
}

 }

 .black-btn{
width: 13.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.3125rem;
background: #000;
color: #FFF;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 1.5rem;
border: none;
&:hover{
 scale: 0.98;
 box-shadow:0.5rem 0.5rem 5rem black ;
 background-color: #FFF;
 color: #000;
}

 }
 
`