import React from 'react'
import { styled } from 'styled-components'

const Startgame = ({toggle}) => {
  return (
    <Container>
     <div className='main' >
      <img className='image' src="images/dices 1.png" alt="dices" />
      <div>
      <h1>DICE GAME</h1>
      <button onClick={toggle} >Play Now</button>
      </div>
     </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 align-items: center;
 justify-content: center;

 .main{
  display: flex;
  align-items: center;
 }
 
 .image{
   width: 40.5625rem;
   height: 32.625rem;

 }

 h1{
  color: #000;
font-family: Poppins;
font-size: 6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
 }
 button{
  display: flex;
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
margin-left: 20rem;
cursor: pointer;
border: none;

&:hover{
 scale: 0.98;
 box-shadow:0.5rem 0.5rem 5rem black ;
 background-color: #FFF;
 color: #000;
 font-size: 1.2rem;
}
 }
`